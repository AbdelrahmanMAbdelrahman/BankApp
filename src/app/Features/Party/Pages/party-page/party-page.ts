import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../../Shared/sidebar/sidebar';


 

@Component({
  selector: 'app-party-page',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './party-page.html',
  styleUrl: './party-page.css',
})
export class PartyPage {}
