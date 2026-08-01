import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { ICurrencyReq } from '../../Models/ICurrencyReq';
import { ICurrencyRes } from '../../Models/ICurrencyRes';

@Component({
  selector: 'app-currency-create-component',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './currency-create-component.html',
  styleUrl: './currency-create-component.css',
})
export class CurrencyCreateComponent implements OnInit {
  CurrencyForm!: FormGroup;
  @Output() OnSaveCurrency=new EventEmitter<ICurrencyReq>();
  @Input()currency?:ICurrencyRes;
 constructor() {
   
   
}
ngOnInit(): void {
  this.initForm();
  if(this.currency){
    this.fillForm();
  }
}
clearForm() {
this.CurrencyForm.reset();
}
submit() {
 let currency:ICurrencyReq={
   name: this.CurrencyForm.get('name')?.value??"",
   code: this.CurrencyForm.get('code')?.value??"",
   status: this.CurrencyForm.get('status')?.value,
   baseCurrency: this.CurrencyForm.get('baseCurrency')?.value,
   defaultCurrency: this.CurrencyForm.get('defaultCurrency')?.value
 };
//  console.log(this.CurrencyForm);
 console.log(currency);
this.OnSaveCurrency.emit(currency)
}
private fillForm(){
  this.CurrencyForm.setValue({
    name:this.currency?.name,
    code:this.currency?.code,
    status:this.currency?.status,
    defaultCurrency:this.currency?.defaultCurrency,
    baseCurrency:this.currency?.baseCurrency,
  })
}
private initForm(){
this.CurrencyForm=new FormGroup({
    name:new FormControl(null,Validators.required),
    code:new FormControl(null,Validators.required),
    status:new FormControl(null,Validators.required),
    baseCurrency:new FormControl(null,Validators.required),
    defaultCurrency:new FormControl(null,Validators.required),
  });
  }
}
