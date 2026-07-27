import { Component, OnInit } from '@angular/core';
import { ContractApiService } from '../../Services/ContractApiService';
import { IContractRes } from '../../Models/contractRes';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contract-grid-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './contract-grid-component.html',
  styleUrl: './contract-grid-component.css',
})
export class ContractGridComponent implements OnInit {
contracts:IContractRes[]=[];
  constructor(private contractApi:ContractApiService) {
    
    
  }
  ngOnInit(): void {
    this.loadContracts();
  }
  private loadContracts(){
    this.contractApi.OnLoadContracts
    .subscribe(
      (contracts:IContractRes[])=>{
       this.contracts=contracts;
      }
    )
  }
}
