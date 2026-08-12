import { Component, OnInit } from '@angular/core';
import { DisbursementListComponent } from "../../Components/disbursement-list-component/disbursement-list-component";
import { DisbursementSearchComponent } from "../../Components/disbursement-search-component/disbursement-search-component";
import { Observable } from 'rxjs';
import { IPaginatedList } from '../../../Facility/Models/PaginatedList';
import { DisbursementRes } from '../../Models/DisbursementRes';
import { DisbursementService } from '../../Services/DisbursementService';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-disbursement-list-page',
  imports: [DisbursementListComponent, DisbursementSearchComponent,AsyncPipe],
  templateUrl: './disbursement-list-page.html',
  styleUrl: './disbursement-list-page.css',
})
export class DisbursementListPage implements OnInit {
paginatedDisbursements?:Observable<IPaginatedList<DisbursementRes>>;
  constructor(private disbursementService:DisbursementService) {
    
  }
  ngOnInit(): void {
    this.paginatedDisbursements=this.disbursementService.getDisbursements();
  }
}
