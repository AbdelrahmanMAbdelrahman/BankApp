import { BehaviorSubject, map, Observable, Subject } from "rxjs";
import { IParty } from "../Models/IParty";
import { IPartyRes } from "../Models/IPartyRes";
import { IPartyReq } from "../Models/IPartyReq";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Body } from "../../../home/body/body";
@Injectable({providedIn:'root'})
export class PartyApiService{

    
    OnSaveParty=new Subject<IParty>();
    Parties:IParty[]=[];
  onDeleteParty =new Subject<string>();
  onLoadParties=new BehaviorSubject<IParty[]>([]);


/**
 *
 */
constructor(private http:HttpClient) {
    
    
}  

    
getParty(id: string):Observable< IParty> {//A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.

   return  this.http.get<any>(`https://localhost:7125/api/Party/${id}`).pipe(
        map((response)=>{
            
            if(response &&response.isSuccess && response.value ){
                
                return response.value as IParty;
            }else {
                throw new Error("error");
            }
        })
     )
    
}
deleteParty(id:string){
 this.http.delete(`https://localhost:7125/api/Party/${id}`)
 .subscribe(
    ()=>{},
   (error)=>{
    console.log(error.error.errors);
   }

 );
}
  saveParty(party: IParty) {
    debugger;
    if(party.id==="0"){
this.createParty(party);
    }else {
        this.updateParty(party);
    }
  }
createParty(party:IParty){
return this.http.post("https://localhost:7125/api/Party",
    {
        name:party.name,
        nativeName:party.nativeName,
        partyGroupName:party.partyGroupName,
        partyCode:party.partyCode,
        internalCode:party.internalCode,
        active:party.active
    }
    // party //this object contains properties and id=0
).subscribe(
    (party)=>{
        console.log("party = ",party);

    },
    (error)=>{
       
  console.log(error.error.errors);

    },
    ()=>{
        console.log("party creating is complete");
    }
);
}
updateParty(party:IParty){
     
this.http.put(`https://localhost:7125/api/Party/${party.id}`,
       {
       
        name:party.name,
        nativeName:party.nativeName,
        partyGroupName:party.partyGroupName,
        partyCode:party.partyCode,
        internalCode:party.internalCode,
        active:party.active
    }
).subscribe(
    ()=>{ },
    (error)=>{
        
        console.log(error.error.errors);
    },
    ()=>{console.log("done");}
);
}
getParties():Observable<IParty[]>
{
return this.http.get<any>('https://localhost:7125/api/Party').pipe(
    map((response)=>{
        if(response && response.isSuccess &&response.value){
            return response.value as IParty[];
        }
        else {throw new Error("no parties found");}
    })
);
}

 
    
}

 

