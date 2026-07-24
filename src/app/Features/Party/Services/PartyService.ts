import { Subject } from "rxjs";
import { IParty } from "../Models/IParty";

export class PartyService{
    
    OnSaveParty=new Subject<IParty>();
    Parties:IParty[]=[];
  onDeleteParty =new Subject<string>();;
    
    getParty(id: number): IParty {
      return this.Parties[id-1]??null;
    }
deleteParty(id:number){
    debugger;
   this.Parties.splice(id-1,1);
}
    saveParty(party:IParty){
        debugger;
        if(party.id!==null){
           this. updateParty(party);
        }else{
           // this.addParty(party);
        }
    }
    updateParty(party: IParty) {
    let index=this.Parties.findIndex(p=>p.id===party.id);
    this.Parties[index]=party;
}
//  addParty(party: IParty) {
//     party.id=this.Parties.length+1;
//     this.Parties.push(party);
// }
    
}

 

