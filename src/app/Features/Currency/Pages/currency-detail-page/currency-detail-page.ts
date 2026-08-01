import { Component, OnInit } from '@angular/core';
import { PartyDetailCompoent } from "../../../Party/Components/party-detail-compoent/party-detail-compoent";
import { ICurrencyRes } from '../../Models/ICurrencyRes';
import { CurrencyService } from '../../Services/CurrencyService';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyDetailComponent } from "../../Components/currency-detail-component/currency-detail-component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-currency-detail-page',
  imports: [PartyDetailCompoent, CurrencyDetailComponent,AsyncPipe],
  templateUrl: './currency-detail-page.html',
  styleUrl: './currency-detail-page.css',
})
export class CurrencyDetailPage implements OnInit {
  currency!:Observable< ICurrencyRes>;
  constructor(
    private currencyApi:CurrencyService,
    private router:Router,
    private route:ActivatedRoute) {
    
    
  }
  ngOnInit(): void {
    let id:string =this.route.snapshot.paramMap.get('id')??"";
    this.currency=this.currencyApi.getCurrency(id);
  }
  deleteCurrency() {
  let id:string =this.route.snapshot.paramMap.get('id')??"";
  this.currencyApi.deleteCurrency(id)
  .subscribe(
    ()=>{
     this.router.navigate(['/CurrencyPage','CurrencyListPage'])
    },
    (error)=>{
      console.log(error.errors);
    }
  );
  }
}
