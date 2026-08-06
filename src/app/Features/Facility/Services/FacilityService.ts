import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IFacilityRes } from "../Models/IFacilityRes";
import { IPaginatedList } from "../Models/PaginatedList";
import { IFacilityReq } from "../Models/IFacilityReq";
import { GlobalConsts } from "../../../Consts/GlobalConsts";

@Injectable({providedIn:"root"})
export class FacilityService{
    url="https://localhost:7125/api/Facility";
    
    constructor(private http:HttpClient) {}
    
    getFacilities(pageNumber:number,pageSize:number):Observable<IPaginatedList<IFacilityRes>>{
        debugger;
        const params=new HttpParams()
        .set("PageSize",pageSize)
        .set("PageNumber",pageNumber);
        // let  uri:string=this.url+params;
        return this.http.get<IPaginatedList<IFacilityRes>>(this.url,{params}).pipe(
            map((facilities)=>{
                if(facilities)return facilities as IPaginatedList<IFacilityRes>;
                else throw new Error("no facilities found");
            })
        );
    }
    createFacility(fac: IFacilityReq):Observable<IFacilityRes> {
        return this.http.post<IFacilityRes>(this.url,fac);
    }
    getFacility(facilityID: string): Observable<IFacilityRes> {
        return this.http.get<IFacilityRes>(`${this.url}/${facilityID}`);
    }
    
    search(event: IFacilityReq): Observable<IPaginatedList<IFacilityRes>> {
        let params=new HttpParams();
        if(event.accountNumber!=null){
            params=params.set('accountNumber',event.accountNumber);}
            if(event.partyID!=null){
                params=params.set('partyID',event.partyID)}
                if(event.currencyID!=null){
                    params=params.set('currencyID',event.currencyID)
                }if(event.facilityType!=null){
                    params=params.set('facilityType',event.facilityType);}
                    params=params.set('pageNumber',1);
                    params=params.set('pageSize',GlobalConsts.pageSize);
                    return this.http.get<IPaginatedList<IFacilityRes>>(`${this.url}/search`,{params});
                }
                EditFacility(fac: IFacilityReq, FacilityID: string):Observable<any> {
                  return this.http.put<any>(`${this.url}/${FacilityID}`,fac)
                }

}