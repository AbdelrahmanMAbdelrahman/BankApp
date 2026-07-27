import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, Subject } from "rxjs";
import { IContractReq } from "../Models/contractReq";
import { IContractRes } from "../Models/contractRes";

@Injectable({providedIn:"root"})
export class ContractApiService{
    url:string="https://localhost:7125/api/Contract";
    OnSaveContract=new Subject<IContractReq>;
    OnLoadContracts=new BehaviorSubject<IContractRes[]>([]);
    onLoadContract=new BehaviorSubject<number>(0);
    constructor(private http:HttpClient) {
    }
    
    getContracts():Observable<IContractRes[]>{
        return this.http.get<any>(this.url)
        .pipe(
            map((contracts)=>{
                console.log(contracts);
                if(contracts )
                    {return contracts as IContractRes[];}
                else {throw new Error('error');}
            })
        );
    }
    updateContract(contract: IContractReq, id: string) {
        return this.http.put(`${this.url}/${id}`,
            contract
        ).subscribe(
            (newContract)=>{
                console.table(newContract);
            },
            (error)=>{
                console.log(error.errors);
            }
            
        )        
    }
    getContract(id: string):Observable< IContractRes> {
        return  this.http.get(`${this.url}/${id}`).pipe(
            (map(
                (contract)=>{
                    if(contract){
                        return contract as IContractRes;
                    }else {
                        throw new Error("contract not found");
                    }
                }
            ))
        )
    }
    deleteContract(id:string):Observable<void> {
       return this.http.delete<void>(`${this.url}/${id}`);
       
    }

createContract( contract:IContractReq){
this.http.post(this.url,contract)
.subscribe(
    (contract)=>{
        console.log('object created',contract);
    },
    (error)=>{
        console.log(error.error.errors);
    }

)
}
}