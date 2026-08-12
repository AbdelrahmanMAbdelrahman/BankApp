import { Component, OnInit } from '@angular/core';
import { BankCreateComponent } from "../../Components/bank-create-component/bank-create-component";
import { Observable } from 'rxjs';
import { ICurrencyRes } from '../../../Currency/Models/ICurrencyRes';
import { CurrencyService } from '../../../Currency/Services/CurrencyService';
import { AsyncPipe } from '@angular/common';
import { BankReq } from '../../Models/BankReq';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BankSearch } from '../../Models/BankSearch';
import { BankService } from '../../Services/BankService';

@Component({
  selector: 'app-bank-create-page',
  imports: [BankCreateComponent,AsyncPipe],
  templateUrl: './bank-create-page.html',
  styleUrl: './bank-create-page.css',
})
export class BankCreatePage implements OnInit {
  currencies?:Observable<ICurrencyRes[]>;
  /**
   *
  */
 constructor(
  private currencyApi:CurrencyService,
  private router:Router,
  private route:ActivatedRoute,
  private bankApi:BankService
) {
   
}
ngOnInit(): void {
  this.currencies=this.currencyApi.getCurrencies();
}
saveBank(req: BankReq) {
if(this.BankID==="0"){
  this.addBank(req);
}
}
  addBank(req: BankReq) {
    this.bankApi.AddBank(req)
    .subscribe(
      (bank)=>{
        this.router.navigate(['BankPage','BankDetailPage',bank.id])
      },
      (error)=>{
        console.log(error.error.errors);
      }
    )
  }
private get BankID(){return this.route.snapshot.paramMap.get('id')??"0" ;}
}
