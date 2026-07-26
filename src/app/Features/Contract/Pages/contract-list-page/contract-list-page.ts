import { Component } from '@angular/core';
import { ContractSearchComponent } from "../../Components/contract-search-component/contract-search-component";
import { ContractGridComponent } from "../../Components/contract-grid-component/contract-grid-component";

@Component({
  selector: 'app-contract-list-page',
  imports: [ContractSearchComponent, ContractGridComponent],
  templateUrl: './contract-list-page.html',
  styleUrl: './contract-list-page.css',
})
export class ContractListPage {}
