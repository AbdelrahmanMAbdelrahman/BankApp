import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { PartyService } from '../../Services/PartyService';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IParty } from '../../Models/IParty';
import { PartyApiService } from '../../Services/PartyApiService';
import { IPartyRes } from '../../Models/IPartyRes';

@Component({
  selector: 'app-party-detail-compoent',
  imports: [ ReactiveFormsModule, RouterLink],
  templateUrl: './party-detail-compoent.html',
  styleUrl: './party-detail-compoent.css',
})
export class PartyDetailCompoent {
  
  party!:IParty;
  partyForm!:FormGroup;
  
  
  constructor(
    private partyService:PartyService,
    private router:Router,
    private route:ActivatedRoute,
    private partyApi:PartyApiService) {
    
  }
  ngOnInit(): void {
    this.partyForm=new FormGroup({
      'name':new FormControl({value:'',disabled:true},Validators.required),
      'nativeName':new FormControl({value:'',disabled:true},Validators.required),
      'partyCode':new FormControl({value:'',disabled:true},Validators.required),
      'internalCode':new FormControl({value:'',disabled:true},Validators.required),
      'partyGroupName':new FormControl({value:'',disabled:true},Validators.required),
      'active':new FormControl({value:'',disabled:true},Validators.required),
      
    });
    debugger;
    this.route.paramMap.subscribe(
      (params)=>{
        let id:string=(params.get('id'))??"";
        console.log(id);
        if(id){
        this.partyApi.getParty(id).subscribe(
      (party:IParty)=>{
       this.party=party;
       this.partyForm.setValue({
            name:this.party.name,
            nativeName:this.party.nativeName,
            partyCode:this.party.partyCode,
            internalCode:this.party.internalCode,
            partyGroupName:this.party.partyGroupName,
            active:this.party.active
          }
          
        );
       
      },
      (error)=>{
        console.log(error);
      }
    );
    
  }

      
    }
  )
  
}
deleteParty(id: string) {
  debugger;
this.partyApi.onDeleteParty.next(id);
this.router.navigate(['/partyPage/partyListPage']);
}
}
