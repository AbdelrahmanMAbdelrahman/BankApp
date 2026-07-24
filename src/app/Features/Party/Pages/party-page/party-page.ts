import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PartySideBar } from "../../Components/party-side-bar/party-side-bar";
 

@Component({
  selector: 'app-party-page',
  imports: [RouterOutlet, PartySideBar],
  templateUrl: './party-page.html',
  styleUrl: './party-page.css',
})
export class PartyPage {}
