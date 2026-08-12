import { Component } from '@angular/core';
import { BankSideBarComponent } from "../../Components/bank-side-bar-component/bank-side-bar-component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bank-page',
  imports: [BankSideBarComponent, RouterOutlet],
  templateUrl: './bank-page.html',
  styleUrl: './bank-page.css',
})
export class BankPage {}
