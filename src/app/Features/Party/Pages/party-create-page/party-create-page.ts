import { Component, OnDestroy, OnInit } from '@angular/core';
import { PartyFormComponent } from "../../Components/party-form-component/party-form-component";
import { Subscription } from 'rxjs';
import { PartyService } from '../../Services/PartyService';
import { PartyApiService } from '../../Services/PartyApiService';

@Component({
  selector: 'app-party-create-page',
  imports: [PartyFormComponent],
  templateUrl: './party-create-page.html',
  styleUrl: './party-create-page.css',
})
export class PartyCreatePage implements OnInit ,OnDestroy {
subscribtion?:Subscription;
  
  constructor(private partyService:PartyService,private partyApi:PartyApiService) {
    
    
  }
  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
    
  }
  ngOnInit(): void {
    debugger;
    this.subscribtion=this.partyApi.OnSaveParty.subscribe(
(party)=>{
  this.partyApi.saveParty(party);
}

    );
  }
}
