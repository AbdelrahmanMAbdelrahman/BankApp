import { enFacilityType } from "../Enum/enFacilityType";

export interface IFacilityReq {
 accountNumber:string, 
 partyID:string, 
 currencyID:string, 
 facilityType:enFacilityType
}

// //  which is the best practice
// export type FacilityReq={
//  accountNumber:string, 
//  partyID:string, 
//  currencyID:string, 
//  facilityType:enFacilityType
// }