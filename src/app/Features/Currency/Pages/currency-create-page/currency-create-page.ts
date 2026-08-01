import { Component, OnInit } from '@angular/core';
import { CurrencyCreateComponent } from "../../Components/currency-create-component/currency-create-component";
import { CurrencyService } from '../../Services/CurrencyService';
import { ICurrencyReq } from '../../Models/ICurrencyReq';
import { ActivatedRoute, Router } from '@angular/router';
import { ICurrencyRes } from '../../Models/ICurrencyRes';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-currency-create-page',
  imports: [CurrencyCreateComponent,AsyncPipe],
  templateUrl: './currency-create-page.html',
  styleUrl: './currency-create-page.css',
})
export class CurrencyCreatePage implements OnInit {

currency?:Observable< ICurrencyRes>;
  constructor(
    private currencyApi:CurrencyService,
    private router:Router,
    private route:ActivatedRoute
  ) {
 
    
  }
  ngOnInit(): void {
   this.loadInputsForUpdate();
  }
  loadInputsForUpdate(){
      let id =this.route.snapshot.paramMap.get('id')??"0";

      if(id!=="0")
this.currency=this.currencyApi.getCurrency(id);
  }
saveCurrency(currency:ICurrencyReq) {
  let id =this.route.snapshot.paramMap.get('id')??"0";
this.currencyApi.saveCurrency(currency,id)
.subscribe(
  (newCurrency)=>{
    this.router.navigate([['CurrencyPage'],'CurrencyListPage'] )
    console.log("new currency ",newCurrency)
  },
  (error)=>{
    console.log(error.error.errors);
  }
);
}
}
