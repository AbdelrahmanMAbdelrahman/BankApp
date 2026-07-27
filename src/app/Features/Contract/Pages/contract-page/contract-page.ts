import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContractSideBar } from "../../Components/contract-side-bar/contract-side-bar";
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { PartyApiService } from '../../../Party/Services/PartyApiService';
import { ContractApiService } from '../../Services/ContractApiService';
import { IContractRes } from '../../Models/contractRes';
 
@Component({
  selector: 'app-contract-page',
  imports: [ContractSideBar, RouterOutlet],
  templateUrl: './contract-page.html',
  styleUrl: './contract-page.css',
})
export class ContractPage implements OnInit,OnDestroy {
subscription?:Subscription;
  constructor(private partyApi:PartyApiService,private contractApi:ContractApiService) {
   
    
  }
  ngOnInit(): void {
    this.initParties();
    this.initContracts();
  }

  initParties(){
    this.subscription=this.partyApi.getParties().subscribe(
      (parties)=>{
       this.partyApi.onLoadParties.next(parties);
      },
      (error)=>{
        console.log(error.error.errors);
      }
    )
  }
  initContracts(){
    this.contractApi.getContracts()
    .subscribe(
      (contracts:IContractRes[])=>{
        this.contractApi.OnLoadContracts.next(contracts);
      }
    )
 
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
