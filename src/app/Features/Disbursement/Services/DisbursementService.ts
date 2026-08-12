import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import{IPaginatedList}from "../../Facility/Models/PaginatedList";
import {DisbursementRes} from "../Models/DisbursementRes";
import { Observable } from "rxjs";
import { GlobalConsts } from "../../../Consts/GlobalConsts";
import { DisbursementReq } from "../Models/DisbursementReq";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
@Injectable({providedIn:"root"})
export class DisbursementService {
    url:string="https://localhost:7125/api/Disbursement";
    constructor(private http:HttpClient) {
        
    }
    getDisbursements(): Observable<IPaginatedList<DisbursementRes>> {
        let  params=new HttpParams()
        .set('pageSize',GlobalConsts.pageSize)
        .set('pageNumber',1)
        return this.http.get<IPaginatedList<DisbursementRes>>(this.url,{params});
    }
    AddService(req: DisbursementReq):Observable<DisbursementRes> {
        return this.http.post<DisbursementRes>(this.url,req);
    }
    getDisbursement(disbursementID: string): Observable<DisbursementRes> {
        return this.http.get<DisbursementRes>(`${this.url}/${disbursementID}`);
    }
    reviewDisbursement(disbursementID: string) {
        // return this.http.put<any>(disbursementID)
    }
    deleteDisbursement(disbursementID: string):Observable<any> {
        return this.http.delete<any>(`${this.url}/${disbursementID}`);
    }
    editDisbursement(req: DisbursementReq, DisbursementID: string):Observable<any> {
      return this.http.put<any>(`${this.url}/${DisbursementID}`,req);
    }
}