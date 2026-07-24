import { CommonModule } from '@angular/common';
import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-currencies-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './currencies-form.html',
  styleUrl: './currencies-form.css',
})
export class CurrenciesForm {
  currency={
    title:"",
    description:"",
    rate:1.0
  }
  submited:boolean=false;
submitForm() {
console.log(this.curForm);
this.submited=true;
this.currency.description=this.curForm.value.description;
this.currency.title=this.curForm.value.title;
this.currency.rate=this.curForm.value.rate;
}
@ViewChild('curForm') curForm!: NgForm;
}
