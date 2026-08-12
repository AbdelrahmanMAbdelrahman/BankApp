import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DisbursementRes } from '../../Models/DisbursementRes';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-disbursement-detail-component',
  imports: [RouterLink],
  templateUrl: './disbursement-detail-component.html',
  styleUrl: './disbursement-detail-component.css',
})
export class DisbursementDetailComponent {
  @Input() disbursement?:DisbursementRes;
  @Output()OnReviewDisbursement=new EventEmitter();
  @Output()OnDeleteDisbursement=new EventEmitter();
reviewDisbursement() {
this.OnReviewDisbursement.emit();
}
deleteDisbursement() {
this.OnDeleteDisbursement.emit();
}
}
