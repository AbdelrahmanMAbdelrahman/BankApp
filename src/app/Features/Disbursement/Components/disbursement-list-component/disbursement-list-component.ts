import { Component, Input, OnInit } from '@angular/core';
import { DisbursementRes } from '../../Models/DisbursementRes';
import { CommonModule } from '@angular/common';
import { IPaginatedList } from '../../../Facility/Models/PaginatedList';
import { RouterLink } from "@angular/router";
import { enDisbursementMethod } from '../../Enums/enDisbursementMethod';

@Component({
  selector: 'app-disbursement-list-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './disbursement-list-component.html',
  styleUrl: './disbursement-list-component.css',
})
export class DisbursementListComponent implements OnInit {
@Input()paginated?:IPaginatedList<DisbursementRes>;
disbursementMethod= enDisbursementMethod;
  constructor() {
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
