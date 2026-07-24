import { Component, OnDestroy, OnInit } from '@angular/core';
import { PartySearchCompoent } from "../../Components/party-search-compoent/party-search-compoent";
import { PartyListCompoent } from "../../Components/party-list-compoent/party-list-compoent";
import { PartyApiService } from '../../Services/PartyApiService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-party-list-page',
  imports: [PartySearchCompoent, PartyListCompoent],
  templateUrl: './party-list-page.html',
  styleUrl: './party-list-page.css',
})
export class PartyListPage  {

}
