import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPartyRes } from '../../../Party/Models/IPartyRes';
import { ICurrencyRes } from '../../../Currency/Models/ICurrencyRes';
import { IParty } from '../../../Party/Models/IParty';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import { IFacilityReq } from '../../Models/IFacilityReq';

@Component({
  selector: 'app-facility-search-component',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './facility-search-component.html',
  styleUrl: './facility-search-component.css',
})
export class FacilitySearchComponent implements OnInit {
  @Input()parties?:IParty[];
  @Input()currencies?:ICurrencyRes[];
  facilityForm?: FormGroup;
  @Output()OnSearch=new EventEmitter<IFacilityReq>();
  constructor() {
    
  }
  ngOnInit(): void {
    this.initForm();
  }
  search() {
   let facilityReq:IFacilityReq={
     accountNumber: this.facilityForm?.get('accountNumber')?.value,
     partyID: this.facilityForm?.get('party')?.value,
     currencyID: this.facilityForm?.get('currency')?.value,
     facilityType: this.facilityForm?.get('facilityType')?.value
   }
    this.OnSearch.emit(facilityReq);
console.log("search",this.facilityForm?.value);
  }
  initForm(){
    this.facilityForm=new FormGroup(
      {
        'accountNumber':new FormControl(null,Validators.required),
        'party':new FormControl(null,Validators.required),
        'currency':new FormControl(null,Validators.required),
        'facilityType':new FormControl(null,Validators.required),
      });
    
  }
  cancel() {

  }
}
