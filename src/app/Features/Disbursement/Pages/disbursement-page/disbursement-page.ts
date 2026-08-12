import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisbursementSideBarComponent } from '../../Components/disbursement-side-bar-component/disbursement-side-bar-component';

@Component({
  selector: 'app-disbursement-page',
  imports: [RouterOutlet,DisbursementSideBarComponent],
  templateUrl: './disbursement-page.html',
  styleUrl: './disbursement-page.css',
})
export class DisbursementPage {}
