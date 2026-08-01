import { Component, OnInit } from '@angular/core';
import { ContractSearchComponent } from "../../Components/contract-search-component/contract-search-component";
import { ContractGridComponent } from "../../Components/contract-grid-component/contract-grid-component";
import { ContractApiService } from '../../Services/ContractApiService';
import { IContractRes } from '../../Models/contractRes';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contract-list-page',
  imports: [ContractSearchComponent, ContractGridComponent,AsyncPipe],
  templateUrl: './contract-list-page.html',
  styleUrl: './contract-list-page.css',
})
export class ContractListPage implements OnInit {

contracts?:Observable< IContractRes[]>;
constructor(private contracatApi:ContractApiService) {
 
}
  ngOnInit(): void {
  this.contracts=this.contracatApi.getContracts();
  }
}
