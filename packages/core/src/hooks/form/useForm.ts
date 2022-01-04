import React, { Dispatch, SetStateAction } from "react";
import { QueryObserverResult } from "react-query";

import {
    useResourceWithRoute,
    useRouterContext,
    useWarnAboutChange,
    useCreate,
    useUpdate,
    useRedirectionAfterSubmission,
    useMutationMode,
    useOne,
} from "@hooks";

import { useCreateForm, useCreateFormProps } from "./useCreateForm";
import { useEditForm, useEditFormProps } from "./useEditForm";
import { useCloneForm, useCloneFormProps } from "./useCloneForm";
import { ButtonProps } from "../../components/antd";

import {
    BaseRecord,
    GetOneResponse,
    HttpError,
    LiveModeProps,
    ResourceRouterParams,
} from "../../interfaces";
import { UseUpdateReturnType } from "../data/useUpdate";
import { UseCreateReturnType } from "../data/useCreate";

export type ActionParams = {
    action?: "edit" | "create" | "clone";
};

type ActionFormProps<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
> = useCreateFormProps<TData, TError, TVariables> &
    useEditFormProps<TData, TError, TVariables> &
    useCloneFormProps<TData, TError, TVariables>;

type ResourcelessActionFormProps<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
> = Omit<ActionFormProps<TData, TError, TVariables>, "resource">;

export type useFormProps<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
> = ActionParams & {
    resource?: string;
} & ResourcelessActionFormProps<TData, TError, TVariables> &
    LiveModeProps;

export type UseFormReturnType<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
> = {
    // form: FormInstance<TVariables>;
    // formProps: FormProps<TVariables>;
    // editId?: string;
    // setEditId?: Dispatch<SetStateAction<string | undefined>>;
    id?: string;
    setId: Dispatch<SetStateAction<string | undefined>>;
    // saveButtonProps: ButtonProps & {
    //     onClick: () => void;
    // };
    queryResult?: QueryObserverResult<GetOneResponse<TData>>;
    mutationResult:
        | UseUpdateReturnType<TData, TError, TVariables>
        | UseCreateReturnType<TData, TError, TVariables>;
    formLoading: boolean;
    setCloneId?: Dispatch<SetStateAction<string | undefined>>;
    cloneId?: string;
    onFinish: (values: TVariables) => Promise<void>;
};

/**
 * `useForm` is used to manage forms. It uses Ant Design {@link https://ant.design/components/form/ Form} data scope management under the hood and returns the required props for managing the form actions.
 *
 * @see {@link https://refine.dev/docs/api-references/hooks/form/useForm} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/api-references/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/api-references/interfaceReferences#httperror `HttpError`}
 * @typeParam TVariables - Values for params. default `{}`
 *
 *
 */
export const useForm = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
>({
    action: actionFromProps,
    resource: resourceFromProps,
    onMutationSuccess,
    onMutationError,
    redirect = "edit",
    successNotification,
    errorNotification,
    metaData,
    mutationMode: mutationModeProp,
    liveMode,
    onLiveEvent,
    liveParams,
    undoableTimeout,
}: useFormProps<TData, TError, TVariables> = {}): UseFormReturnType<
    TData,
    TError,
    TVariables
> => {
    const { useParams } = useRouterContext();
    const {
        resource: resourceFromRoute,
        action: actionFromRoute,
        id: idFromRoute,
    } = useParams<ResourceRouterParams>();

    // id state is needed to determine selected record in a context for example useModal
    const [id, setId] = React.useState<string | undefined>(idFromRoute);
    // const [cloneId, setCloneId] = React.useState<string>();

    const resourceName = resourceFromProps ?? resourceFromRoute;
    const action = actionFromProps ?? actionFromRoute;
    // const id = idState ?? idFromRoute;

    const resourceWithRoute = useResourceWithRoute();
    const resource = resourceWithRoute(resourceName);

    const { mutationMode: mutationModeContext } = useMutationMode();
    const mutationMode = mutationModeProp ?? mutationModeContext;

    const isCreate = action === "create";
    const isEdit = action === "edit";
    const isClone = action === "clone";

    const enableQuery = id !== undefined && (isEdit || isClone);

    const queryResult = useOne<TData>({
        resource: resource.name,
        id: id ?? "",
        queryOptions: {
            enabled: enableQuery,
        },
        liveMode,
        onLiveEvent,
        liveParams,
        metaData,
    });

    const { isFetching: isFetchingQuery } = queryResult;

    const mutationResultCreate = useCreate<TData, TError, TVariables>();
    const { mutate: mutateCreate, isLoading: isLoadingCreate } =
        mutationResultCreate;

    const mutationResultUpdate = useUpdate<TData, TError, TVariables>();
    const { mutate: mutateUpdate, isLoading: isLoadingUpdate } =
        mutationResultUpdate;

    const { setWarnWhen } = useWarnAboutChange();

    const handleSubmitWithRedirect = useRedirectionAfterSubmission();

    const onFinishCreate = async (values: TVariables) => {
        setWarnWhen(false);
        mutateCreate(
            {
                values,
                resource: resource.name,
                successNotification,
                errorNotification,
                metaData,
            },
            {
                onSuccess: (data, variables, context) => {
                    if (onMutationSuccess) {
                        onMutationSuccess(data, values, context);
                    }

                    const id = data?.data?.id;

                    handleSubmitWithRedirect({
                        redirect,
                        resource,
                        id,
                    });
                },
                onError: (error: TError, variables, context) => {
                    if (onMutationError) {
                        return onMutationError(error, values, context);
                    }
                },
            },
        );
    };

    const onFinishUpdate = async (values: TVariables) => {
        setWarnWhen(false);

        // setTimeout is required to make onSuccess e.g. callbacks to work if component unmounts i.e. on route change
        setTimeout(() => {
            mutateUpdate(
                {
                    id: id ?? "",
                    values,
                    resource: resource.name,
                    mutationMode,
                    undoableTimeout,
                    successNotification,
                    errorNotification,
                    metaData,
                },
                {
                    onSuccess: (data, _, context) => {
                        console.log("onsuccess");
                        if (onMutationSuccess) {
                            return onMutationSuccess(data, values, context);
                        }

                        if (mutationMode === "pessimistic") {
                            setId(undefined);
                            handleSubmitWithRedirect({
                                redirect,
                                resource,
                                id,
                            });
                        }
                    },
                    onError: (error: TError, variables, context) => {
                        if (onMutationError) {
                            return onMutationError(error, values, context);
                        }
                    },
                },
            );
        });

        if (!(mutationMode === "pessimistic")) {
            setId(undefined);
            handleSubmitWithRedirect({
                redirect,
                resource,
                id,
            });
        }
    };

    const createResult = {
        formLoading: isFetchingQuery || isLoadingCreate,
        mutationResult: mutationResultCreate,
        onFinish: onFinishCreate,
    };

    const editResult = {
        formLoading: isFetchingQuery || isLoadingUpdate,
        mutationResult: mutationResultUpdate,
        onFinish: onFinishUpdate,
    };

    const result = isCreate || isClone ? createResult : editResult;

    return { ...result, queryResult, id, setId };

    // const editForm = useEditForm<TData, TError, TVariables>({
    //     ...rest,
    //     resource,
    //     action,
    // } as useEditFormProps<TData, TError, TVariables>);

    // const createForm = useCreateForm<TData, TError, TVariables>({
    //     ...rest,
    //     resource,
    //     action,
    // } as useCreateFormProps<TData, TError, TVariables>);

    // const cloneForm = useCloneForm<TData, TError, TVariables>({
    //     ...rest,
    //     resource,
    //     cloneId,
    //     action,
    // } as useCloneFormProps<TData, TError, TVariables>);

    // switch (action) {
    //     case "create":
    //         return { ...createForm };
    //     case "edit":
    //         return editForm;
    //     case "clone":
    //         // setCloneId and cloneId needs to be returned from both clone and create cases.
    //         // It is needed to make them accessible in useModalForm to be able to manage id state.
    //         return { ...cloneForm, setCloneId, cloneId };
    //     default:
    //         return createForm;
    // }
};
