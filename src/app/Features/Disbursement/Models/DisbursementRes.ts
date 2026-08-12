import { enDisbursementMethod } from "../Enums/enDisbursementMethod";

export interface DisbursementRes{
id:string
facilityID :String,
facility:string,//accountNumber
contractID:String,
contract:string ,//contractNumber
amount:number,
disbursementDate:Date,
comments:string,
posted:boolean,
reviewed:boolean,
disbursementMethod:enDisbursementMethod,
// bankID:string
}