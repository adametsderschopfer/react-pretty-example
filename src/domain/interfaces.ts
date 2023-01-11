type TLoading = "idle" | "pending" | "succeeded" | "failed";
type TError = any

export interface IDefaultStoreStructure {
    loading?: TLoading;
    error?: TError;
}