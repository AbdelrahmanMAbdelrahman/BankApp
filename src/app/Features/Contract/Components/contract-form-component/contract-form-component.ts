import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PartyApiService } from '../../../Party/Services/PartyApiService';
import { IParty } from '../../../Party/Models/IParty';
import {  AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContractApiService } from '../../Services/ContractApiService';
import { IContractReq } from '../../Models/contractReq';
import { IContractRes } from '../../Models/contractRes';

@Component({
  selector: 'app-contract-form-component',
  imports: [CommonModule, ReactiveFormsModule,AsyncPipe],
  templateUrl: './contract-form-component.html',
  styleUrl: './contract-form-component.css',
})
export class ContractFormComponent implements OnInit {
 @Input() parties?:IParty[];
 @Input()contract?:IContractRes;
  contractForm!:FormGroup;
  @Output()OnSaveContract=new EventEmitter<IContractReq>();
  constructor(private partyApi:PartyApiService,private contractApi:ContractApiService) {
    
  }
 private initForm(){
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

let contract:IContractReq=this.prepareContract();
console.log("before create ",contract);
  this.OnSaveContract.emit(contract);
  this.contractForm?.reset();
  
}
private loadFormInputs(){
  console.table(this.contract);
  this.contractForm?.setValue(
    {
      'party':this.contract?.partyID,
      'contractNumber':this.contract?.contractNumber,
      'contractType':Number(this.contract?.contractType),// when open form for edit this field is empty
      'endDate':new Date(this.contract!.endDate)
  .toISOString()
  .split('T')[0],
      'startDate':new Date(this.contract!.startDate)
  .toISOString()
  .split('T')[0],
      'leasingType':this.contract?.leasingType,// when open form for edit this field is empty
      'iSLetter':this.contract?.iSLetter // when open form for edit this field is empty
    }
  );
}
private prepareContract():IContractReq{
let contractReq:IContractReq={
  contractNumber:String( this.contractForm?.get('contractNumber')?.value),
  contractType:Number( this.contractForm?.get("contractType")?.value),
  iSLetter:Boolean( this.contractForm?.get("contractType")?.value),
  leasingType: Number( this.contractForm?.get("leasingType")?.value),
  endDate:new Date( this.contractForm?.get("endDate")?.value ),
  startDate: new Date( this.contractForm?.get("startDate")?.value ),
  partyID: String( this.contractForm?.get('party')?.value)
};
return contractReq;
}
  ngOnInit(): void {
    this.initForm();
  
   if(this.contract){
    this.loadFormInputs();
   }
    this.partyApi.onLoadParties.subscribe(
      (parties)=>{
        this.parties=parties;
      }
    )
  
  }

}
