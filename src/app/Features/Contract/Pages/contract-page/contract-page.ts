import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContractSideBar } from "../../Components/contract-side-bar/contract-side-bar";
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { PartyApiService } from '../../../Party/Services/PartyApiService';
 
@Component({
  selector: 'app-contract-page',
  imports: [ContractSideBar, RouterOutlet],
  templateUrl: './contract-page.html',
  styleUrl: './contract-page.css',
})
export class ContractPage implements OnInit,OnDestroy {
subscription?:Subscription;
  constructor(private partyApi:PartyApiService) {
   
    
  }
  ngOnInit(): void {
    this.subscription=this.partyApi.getParties().subscribe(
      (parties)=>{
       this.partyApi.onLoadParties.next(parties);
      },
      (error)=>{
        console.log(error.error.errors);
      }
    )
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
