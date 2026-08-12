import { Component, Input } from '@angular/core';
import { BankRes } from '../../Models/BankRes';

@Component({
  selector: 'app-bank-detail-component',
  imports: [],
  templateUrl: './bank-detail-component.html',
  styleUrl: './bank-detail-component.css',
})
export class BankDetailComponent {
  @Input()bank?:BankRes;
editBank() {
throw new Error('Method not implemented.');
}
deleteBank() {
throw new Error('Method not implemented.');
}
}
