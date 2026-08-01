import { Component, Input, OnInit } from '@angular/core';
import { ICurrencyRes } from '../../Models/ICurrencyRes';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-currency-list-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './currency-list-component.html',
  styleUrl: './currency-list-component.css',
})
export class CurrencyListComponent implements OnInit {
  @Input() Currencies!:Array<ICurrencyRes>;//Icurrency[];
  /**
   *
   */
 
  ngOnInit(): void {
    console.log("currencies",this.Currencies);
  }

}
