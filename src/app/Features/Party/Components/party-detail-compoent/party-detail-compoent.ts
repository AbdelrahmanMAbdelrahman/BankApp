import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  
 @Input() party!:IParty;
  partyForm!:FormGroup;
@Output()DeleteParty=new EventEmitter<string>();
  
  constructor(
  ) {
    
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

       this.partyForm.setValue({
            name:this.party.name,
            nativeName:this.party.nativeName,
            partyCode:this.party.partyCode,
            internalCode:this.party.internalCode,
            partyGroupName:this.party.partyGroupName,
            active:this.party.active
                               });
       

    
  }

deleteParty(id: string) {
  debugger;
  this.DeleteParty.emit(id);
// this.partyApi.onDeleteParty.next(id);
// this.router.navigate(['/partyPage/partyListPage']);
}
}
