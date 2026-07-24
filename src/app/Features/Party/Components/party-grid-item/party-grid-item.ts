import { Component, Input } from '@angular/core';
import { IParty } from '../../Models/IParty';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-party-grid-item',
  imports: [CommonModule],
  templateUrl: './party-grid-item.html',
  styleUrl: './party-grid-item.css',
})
export class PartyGridItem {
  @Input() party!:IParty; 
}
