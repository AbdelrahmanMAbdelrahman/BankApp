import { Component, OnDestroy, OnInit } from '@angular/core';
import { PartySearchCompoent } from "../../Components/party-search-compoent/party-search-compoent";
import { PartyListCompoent } from "../../Components/party-list-compoent/party-list-compoent";
import { PartyApiService } from '../../Services/PartyApiService';
import { Observable, Subscription } from 'rxjs';
import { IParty } from '../../Models/IParty';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-party-list-page',
  imports: [PartySearchCompoent, PartyListCompoent,AsyncPipe],
  templateUrl: './party-list-page.html',
  styleUrl: './party-list-page.css',
})
export class PartyListPage  implements OnInit {
  parties?:Observable< IParty[]>;
  ngOnInit(): void {
    this.parties=this.partyApi.getParties();
  }

  /**
   *
   */
  constructor(private partyApi:PartyApiService) {
     
  }
}
