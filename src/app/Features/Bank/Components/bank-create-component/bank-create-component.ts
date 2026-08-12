import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BankReq } from '../../Models/BankReq';
import { ICurrencyRes } from '../../../Currency/Models/ICurrencyRes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-create-component',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './bank-create-component.html',
  styleUrl: './bank-create-component.css',
})
export class BankCreateComponent implements OnInit {
  bankForm?:FormGroup;
  @Output() OnSaveBank=new EventEmitter<BankReq>;
  @Input() Curriencies?:ICurrencyRes[];
  constructor() {
    
  }
  ngOnInit(): void {
    this.initForm();
  }
   saveBank(){
    debugger;
   let bankReq:BankReq={
     lookupCode: this.bankForm?.get('lookupCode')?.value,
     description: this.bankForm?.get('description')?.value,
     abbreviation: this.bankForm?.get('appreviation')?.value,
     currencyID: this.bankForm?.get('currency')?.value,
     swiftCode: this.bankForm?.get('swiftCode')?.value,
     address: this.bankForm?.get('address')?.value,
     phone: this.bankForm?.get('phone')?.value,
     fax: this.bankForm?.get('fax')?.value,
     eMail: this.bankForm?.get('email')?.value,
     active: this.bankForm?.get('active')?.value
   }
   console.log(bankReq);
   this.OnSaveBank.emit(bankReq);
    }
    private initForm(){
  this.bankForm=new FormGroup({
    'lookupCode':new FormControl(null,Validators.required),
    'appreviation':new FormControl(null,Validators.required),
    'swiftCode':new FormControl(null,Validators.required),
    'address':new FormControl(null,Validators.required),
    'fax':new FormControl(null,Validators.required),
    'email':new FormControl(null,Validators.required),
    'phone':new FormControl(null,Validators.required),
    'active':new FormControl(null,Validators.required),
    'currency':new FormControl(null,Validators.required),
    'description':new FormControl(null,Validators.required),
  })
}
clearInputs() {
this.bankForm?.reset();
}
}
