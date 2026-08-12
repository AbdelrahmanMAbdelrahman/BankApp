import { enDisbursementMethod } from "../Enums/enDisbursementMethod";

export interface DisbursementReq{
facilityID :String,
contractID:String,
amount:number,
disbursementDate:Date,
comments:string,
posted:boolean,
reviewed:boolean,
disbursementMethod:enDisbursementMethod,
// bankID:string
}