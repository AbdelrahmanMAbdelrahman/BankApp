import { Component, OnInit } from '@angular/core';
import { PartyGridItem } from "../party-grid-item/party-grid-item";
import { PartyService } from '../../Services/PartyService';
import { IParty } from '../../Models/IParty';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { PartyApiService } from '../../Services/PartyApiService';
import { IPartyRes } from '../../Models/IPartyRes';

@Component({
  selector: 'app-party-list-compoent',
  imports: [ CommonModule, RouterLink],
  templateUrl: './party-list-compoent.html',
  styleUrl: './party-list-compoent.css',
})
export class PartyListCompoent implements OnInit{
  parties:IParty[]=[];
  constructor(private partyService:PartyService,private partyApiService:PartyApiService) {

//     partyApiService.getParty('5e51b1c5-c846-4904-3b97-08dee82b16eb').subscribe(
//       (party:IPartyRes)=>{
// console.log(party);// un defined
//       },
//       (error)=>{
//         console.log(error);
//       }
//     );
  }

  ngOnInit(): void {
    debugger;
   this. partyApiService.getParties().subscribe(
  (parts)=>{
    console.log(parts);
this.parties=parts;

  },
  (error)=>{
    console.log(error);
  }
);
  }
}
