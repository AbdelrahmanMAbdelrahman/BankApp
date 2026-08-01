import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICurrencyRes } from '../../Models/ICurrencyRes';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-currency-detail-component',
  imports: [RouterLink],
  templateUrl: './currency-detail-component.html',
  styleUrl: './currency-detail-component.css',
})
export class CurrencyDetailComponent  {
  @Input() currency!:ICurrencyRes;
  @Output ()onDeleteCurrency=new EventEmitter();
deleteCurrency() {
this.onDeleteCurrency.emit();
}
  /**
   *
   */
 
}
