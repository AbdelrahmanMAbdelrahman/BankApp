import { Component, OnDestroy, OnInit } from '@angular/core';
import { PartyDetailCompoent } from "../../Components/party-detail-compoent/party-detail-compoent";
import { PartyService } from '../../Services/PartyService';
import { Subscription } from 'rxjs';
import { PartyApiService } from '../../Services/PartyApiService';

@Component({
  selector: 'app-party-detail-page',
  imports: [PartyDetailCompoent],
  templateUrl: './party-detail-page.html',
  styleUrl: './party-detail-page.css',
})
export class PartyDetailPage implements OnInit ,OnDestroy {
 subscription?:Subscription;
  constructor(private partyService:PartyService,private partyApi:PartyApiService) {
    
    
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
this.subscription=this.partyApi.onDeleteParty.subscribe(
  (id:string)=>{
    this.partyApi.deleteParty(id);
  }
)
  }
}
