import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-currency-search-component',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './currency-search-component.html',
  styleUrl: './currency-search-component.css',
})
export class CurrencySearchComponent implements OnInit {
  CurrencyForm!:FormGroup;

  /**
   *
   */
  constructor() {
     
  }
  ngOnInit(): void {
 this.initForm();
  
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
