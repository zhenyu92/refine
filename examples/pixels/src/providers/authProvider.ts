import { AuthProvider } from "@pankod/refine-core";

import { supabaseClient } from "utility";

export const authProvider: AuthProvider = {
    login: async ({ email, password, providerName }) => {
        // sign in with oauth
        if (providerName) {
            const { data, error } = await supabaseClient.auth.signInWithOAuth({
                provider: providerName,
            });

            if (error) {
                return Promise.reject(error);
            }

            if (data?.url) {
                return Promise.resolve();
            }
        }

        // sign in with email and password
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return Promise.reject(error);
        }

        if (data?.user) {
            return Promise.resolve();
        }

        // for third-party login
        return Promise.resolve(false);
    },
    register: async ({ email, password }) => {
        const { data, error } = await supabaseClient.auth.signUp({
            email,
            password,
        });

        if (error) {
            return Promise.reject(error);
        }

        if (data) {
            return Promise.resolve();
        }
    },
    forgotPassword: async ({ email }) => {
        const { data, error } = await supabaseClient.auth.resetPasswordForEmail(
            email,
            {
                redirectTo: `${window.location.origin}/update-password`,
            },
        );

        if (error) {
            return Promise.reject(error);
        }

        if (data) {
            return Promise.resolve();
        }
    },
    updatePassword: async ({ password }) => {
        const { data, error } = await supabaseClient.auth.updateUser({
            password,
        });

        if (error) {
            return Promise.reject(error);
        }

        if (data) {
            return Promise.resolve("/");
        }
    },
    logout: async () => {
        const { error } = await supabaseClient.auth.signOut();

        if (error) {
            return Promise.reject(error);
        }

        return Promise.resolve("/");
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
        const { data } = await supabaseClient.auth.getSession();
        const { session } = data;

        if (!session) {
            return Promise.reject();
        }

        return Promise.resolve();
    },
    getPermissions: async () => {
        const { data } = await supabaseClient.auth.getUser();
        const { user } = data;

        if (user) {
            return Promise.resolve(user.role);
        }
    },
    getUserIdentity: async () => {
        const { data } = await supabaseClient.auth.getUser();
        const { user } = data;

        if (user) {
            return Promise.resolve({
                ...user,
                name: user.email,
            });
        }

        return Promise.reject();
    },
};
