import { Component, OnDestroy, OnInit } from '@angular/core';
import { PartyDetailCompoent } from "../../Components/party-detail-compoent/party-detail-compoent";
import { PartyService } from '../../Services/PartyService';
import { Observable, Subscription } from 'rxjs';
import { PartyApiService } from '../../Services/PartyApiService';
import { IParty } from '../../Models/IParty';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-party-detail-page',
  imports: [PartyDetailCompoent,AsyncPipe],
  templateUrl: './party-detail-page.html',
  styleUrl: './party-detail-page.css',
})
export class PartyDetailPage implements OnInit ,OnDestroy {
deleteParty(id: string) {
this.partyApi.deleteParty(id)
.subscribe(
  ()=>{
    this.router.navigate(['/partyPage/partyListPage']);
  }
);
}
 subscription?:Subscription;
 party?:Observable<IParty>;
  constructor(
    private partyService:PartyService,
    private partyApi:PartyApiService ,
    private route:ActivatedRoute,
    private router:Router 
  ) {
    
    
  }
  ngOnDestroy(): void {
    // this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
    const id:string =this.route.snapshot.paramMap.get('id')??"";
    this.party=this.partyApi.getParty(id);
// this.subscription=this.partyApi.onDeleteParty.subscribe(
//   (id:string)=>{
//     this.partyApi.deleteParty(id);
//   }
// )
  }
}
