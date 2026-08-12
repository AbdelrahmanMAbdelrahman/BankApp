export interface ApiResponse<T>{
    error:string,
    isError:boolean,
    isSuccess:boolean,
    value:T
}