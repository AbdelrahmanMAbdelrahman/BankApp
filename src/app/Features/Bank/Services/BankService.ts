import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BankReq } from "../Models/BankReq";
import { Observable } from "rxjs";
import { BankRes } from "../Models/BankRes";

@Injectable({providedIn:"root"})
export class BankService {
    private readonly url:string="https://localhost:7125/api/Bank";
    /**
     *
    */
   constructor(private http:HttpClient) {
       
}
AddBank(req: BankReq):Observable<BankRes> {
    return this.http.post<BankRes>(this.url,req);
}
GetBank(BankID: string | null): Observable<BankRes> {
  return this.http.get<BankRes>(`${this.url}/${BankID}`);
}

EditBank(req: BankReq,id:string):Observable<any> {
  return this.http.post<any>(`${this.url}/${id}`,req);
}
}