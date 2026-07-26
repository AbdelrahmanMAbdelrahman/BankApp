import { Component, OnInit } from '@angular/core';
import { PartyApiService } from '../../../Party/Services/PartyApiService';
import { IParty } from '../../../Party/Models/IParty';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-form-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contract-form-component.html',
  styleUrl: './contract-form-component.css',
})
export class ContractFormComponent implements OnInit {
  parties:IParty[]=[];
  contractForm!:FormGroup;
  constructor(private partyApi:PartyApiService) {
    
  }
  initForm(){
    this.contractForm=new FormGroup({
      'party':new FormControl<string|null>(null,Validators.required),
    'contractNumber':new FormControl(null,Validators.required),
    'contractType':new FormControl(null,Validators.required),
    'endDate':new FormControl(null,Validators.required),
    'startDate':new FormControl(null,Validators.required),
    'leasingType':new FormControl(null,Validators.required),
    'iSLetter':new FormControl(null),
    
  })
}
saveContract() {
console.log(this.contractForm.value)
}
  ngOnInit(): void {
    this.initForm();
    debugger;
    this.partyApi.onLoadParties.subscribe(
      (parties)=>{
        this.parties=parties;
      }
    )
  
  }

}
