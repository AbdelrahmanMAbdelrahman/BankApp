import { IFacilityRes } from "./IFacilityRes"

export interface IPaginatedList<T>{
    pageNumber:number,
    totalPages:number,
    items:T[],
    hasPreviousPage:boolean,
    hasNextPage:boolean
}

 