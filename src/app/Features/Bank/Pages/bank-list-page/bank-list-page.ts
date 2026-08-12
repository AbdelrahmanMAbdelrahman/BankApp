import { Component } from '@angular/core';
import { BankListComponent } from "../../Components/bank-list-component/bank-list-component";
import { BankSearchComponent } from "../../Components/bank-search-component/bank-search-component";

@Component({
  selector: 'app-bank-list-page',
  imports: [BankListComponent, BankSearchComponent],
  templateUrl: './bank-list-page.html',
  styleUrl: './bank-list-page.css',
})
export class BankListPage {}
