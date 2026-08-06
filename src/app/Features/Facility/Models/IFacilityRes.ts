import { enFacilityType } from "../Enum/enFacilityType";

export interface IFacilityRes {
      id:string,
 accountNumber:string,
  partyID:string,
  currencyID:string,
  facilityType:enFacilityType,
 currencyName:string,
 partyName:string
}