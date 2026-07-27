import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { ContractApiService } from '../../Services/ContractApiService';
import { IContractRes } from '../../Models/contractRes';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-contract-detail-component',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contract-detail-component.html',
  styleUrl: './contract-detail-component.css',
})
export class ContractDetailComponent implements OnChanges  {
  @Input()contract?:IContractRes;
  @Output()OnDeleteContract=new EventEmitter<string>();
deleteContract(id: string|undefined) {
this.OnDeleteContract.emit(id);
}
  
  
  ngOnChanges(changes: SimpleChanges): void {
     console.log('Child received:', this.contract);
  }
  

}
