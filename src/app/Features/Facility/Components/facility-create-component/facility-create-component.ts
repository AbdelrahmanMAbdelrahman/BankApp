import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { IParty } from '../../../Party/Models/IParty';
import { ICurrencyRes } from '../../../Currency/Models/ICurrencyRes';
import { IFacilityReq } from '../../Models/IFacilityReq';
import { IFacilityRes } from '../../Models/IFacilityRes';

@Component({
  selector: 'app-facility-create-component',
  imports: [CommonModule, ɵInternalFormsSharedModule,ReactiveFormsModule],
  templateUrl: './facility-create-component.html',
  styleUrl: './facility-create-component.css',
})
export class FacilityCreateComponent implements OnInit{
  facilityForm?:FormGroup;
  @Input() parties!:IParty[];
  @Input() currencies!:ICurrencyRes[];
  @Input()facility?:IFacilityRes;
  @Output()OnSaveFacility=new EventEmitter<IFacilityReq>();

  ngOnInit(): void {
    this.initForm();
    this.fillForm();
  }
private initForm(){
  this.facilityForm=new FormGroup({
    'accountNumber':new FormControl(null,Validators.required),
    'party':new FormControl(null,Validators.required),
    'currency':new FormControl(null,Validators.required),
    'facilityType':new FormControl(null,Validators.required),
  })
}
private fillForm(){
    if(this.facility){
    this.facilityForm?.setValue({
      'accountNumber':this.facility.accountNumber,
      'party':this.facility.partyID,
      'currency':this.facility.currencyID,
      'facilityType':this.facility.facilityType.toString(),
    });
  }
}
saveFacility() {
let facilityReq:IFacilityReq={
  accountNumber: this.AccountNumber.value,
  partyID: this.Party.value,
  currencyID: this.Currency.value,
  facilityType: this.FacilityType.value
}
this.OnSaveFacility.emit(facilityReq);
this.facilityForm?.reset();
}
get AccountNumber(){return this.facilityForm?.get('accountNumber')!;};
get Party(){return this.facilityForm?.get('party')!;};
get Currency(){return this.facilityForm?.get('currency')!;};
get FacilityType(){return this.facilityForm?.get('facilityType')!;};
constructor() {
 
  
}
}
