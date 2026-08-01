import { Component } from '@angular/core';
import { CurrencySideBarComponent } from '../../Components/currency-side-bar-component/currency-side-bar-component';
import { RouterOutlet } from '@angular/router';
 
@Component({
  selector: 'app-currency-page',
  imports: [CurrencySideBarComponent, RouterOutlet],
  templateUrl: './currency-page.html',
  styleUrl: './currency-page.css',
})
export class CurrencyPage {}
