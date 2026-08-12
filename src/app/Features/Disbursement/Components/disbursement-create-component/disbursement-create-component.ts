import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DisbursementReq } from '../../Models/DisbursementReq';
import { IFacilityRes } from '../../../Facility/Models/IFacilityRes';
import { IContractRes } from '../../../Contract/Models/contractRes';
import { CommonModule } from '@angular/common';
import { DisbursementRes } from '../../Models/DisbursementRes';

@Component({
  selector: 'app-disbursement-create-component',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './disbursement-create-component.html',
  styleUrl: './disbursement-create-component.css',
})
export class DisbursementCreateComponent implements OnInit {
  disbursementForm?:FormGroup;
  @Input()facilities?:IFacilityRes[];
  @Input()contracts?:IContractRes[];
  @Input()disbursement?:DisbursementRes;
  @Output() OnSave=new EventEmitter<DisbursementReq>();
  
  constructor() {
    
  }
  ngOnInit(): void {
    this.initForm();
    if(this.disbursement){
      this.fillForm();
    }
  }
  initForm():void{
    this.disbursementForm=new FormGroup({
      'facility':new FormControl(null,Validators.required),
      'contract':new FormControl(null,Validators.required),
      'disbursementDate':new FormControl(null,Validators.required),
      'comments':new FormControl(null,Validators.required),
      'disbursementMethod':new FormControl(null,Validators.required),
      'amount':new FormControl(null,Validators.required)
    })
  }
  saveDisbursement() {
let disbursementReq:DisbursementReq={
  facilityID: this.disbursementForm?.get('facility')?.value,
  contractID: this.disbursementForm?.get('contract')?.value,
  amount: this.disbursementForm?.get('amount')?.value,
  disbursementDate: this.disbursementForm?.get('disbursementDate')?.value,
  comments: this.disbursementForm?.get('comments')?.value,
  posted: false,
  reviewed: false,
  disbursementMethod: this.disbursementForm?.get('disbursementMethod')?.value
}
this.OnSave.emit(disbursementReq);
  }
  clearForm() {
  this.disbursementForm?.reset();
  }
private fillForm(){
this.disbursementForm?.setValue({
  'facility':this.disbursement?.facilityID,
  'contract':this.disbursement?.contractID,
  'disbursementDate':new Date(this.disbursement!.disbursementDate).toISOString()
  .split('T')[0],
  'comments':this.disbursement?.comments,
  'disbursementMethod':this.disbursement?.disbursementMethod,
  'amount':this.disbursement?.amount,
})
}
}
