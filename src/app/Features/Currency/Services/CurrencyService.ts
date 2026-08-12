import { Injectable } from "@angular/core";
import { ICurrencyReq } from "../Models/ICurrencyReq";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICurrencyRes } from "../Models/ICurrencyRes";

@Injectable({providedIn:'root'})
export class CurrencyService{
    /**
     *
    */
   url:string="https://localhost:7125/api/Currency";
   constructor(private http:HttpClient) {
       
       
}
deleteCurrency(id: string):Observable<any> {
 return this.http.delete(`${this.url}/${id}`);
}

  saveCurrency(currency: ICurrencyReq, id: string ) :Observable<ICurrencyRes>{
    if(id!=="0"){
      return  this.http.put<ICurrencyRes>(`${this.url}/${id}`,currency) ;
    }
    else{
      return this.http.post<ICurrencyRes>(this.url,currency) ;
}
  }

  getCurrencies():Observable<ICurrencyRes[]>{
    return this.http.get<Array<ICurrencyRes>>(this.url);
  }
getCurrency(id:string):Observable<ICurrencyRes>{
    return this.http.get<ICurrencyRes>(`${this.url}/${id}`);
}

}