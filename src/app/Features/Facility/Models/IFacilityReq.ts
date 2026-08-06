import { enFacilityType } from "../Enum/enFacilityType";

export interface IFacilityReq {
 accountNumber:string, 
 partyID:string, 
 currencyID:string, 
 facilityType:enFacilityType
}