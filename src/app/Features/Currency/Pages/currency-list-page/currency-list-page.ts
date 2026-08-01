import { Component, OnInit } from '@angular/core';
import { CurrencyListComponent } from "../../Components/currency-list-component/currency-list-component";
import { CurrencySearchComponent } from "../../Components/currency-search-component/currency-search-component";
import { ICurrencyRes } from '../../Models/ICurrencyRes';
import { CurrencyService } from '../../Services/CurrencyService';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currency-list-page',
  imports: [CurrencyListComponent, CurrencySearchComponent,AsyncPipe],
  templateUrl: './currency-list-page.html',
  styleUrl: './currency-list-page.css',
})
export class CurrencyListPage implements OnInit{
currencies?:Observable< ICurrencyRes[]>;;
constructor(private currencyApi:CurrencyService) {
   
}
  ngOnInit(): void {
 this.currencies= this.currencyApi.getCurrencies();
 console.log(this.currencies);
  // .subscribe(
  //   (currencies)=>{
  //     this.currencies=currencies;
  //   },
  //   (error)=>{
  //     console.log(error.error.errors);
  //   }
  // )
  }

}
