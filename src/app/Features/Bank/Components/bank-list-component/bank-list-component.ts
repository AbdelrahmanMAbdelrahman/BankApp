import { Component, Input } from '@angular/core';
import { BankRes } from '../../Models/BankRes';
import { CommonModule } from '@angular/common';
import { IPaginatedList } from '../../../Facility/Models/PaginatedList';

@Component({
  selector: 'app-bank-list-component',
  imports: [CommonModule],
  templateUrl: './bank-list-component.html',
  styleUrl: './bank-list-component.css',
})
export class BankListComponent {
  @Input() banks?:IPaginatedList< BankRes>;
getNext() {
throw new Error('Method not implemented.');
}
getPrevious() {
throw new Error('Method not implemented.');
}
}
