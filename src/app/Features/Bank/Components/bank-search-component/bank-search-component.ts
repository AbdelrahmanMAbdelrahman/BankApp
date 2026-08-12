import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-bank-search-component',
  imports: [ɵInternalFormsSharedModule,ReactiveFormsModule],
  templateUrl: './bank-search-component.html',
  styleUrl: './bank-search-component.css',
})
export class BankSearchComponent implements OnInit {
  bankForm?:FormGroup;
  ngOnInit(): void {
this.initForm();
  }
  private initForm(){
    this.bankForm=new FormGroup({
 'currency':new FormControl(null),
 'address':new FormControl(null),
 'phone':new FormControl(null),
 'fax':new FormControl(null),
 'email':new FormControl(null),
 'active':new FormControl(null)
    });
  }
clearForm() {
throw new Error('Method not implemented.');
}
searchBank() {
console.log(this.bankForm?.value)
}
}
