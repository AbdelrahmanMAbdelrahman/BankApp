import { Component, Input, input, OnDestroy, OnInit, Pipe } from '@angular/core';
import { ContractDetailComponent } from "../../Components/contract-detail-component/contract-detail-component";
import { Observable, pipe, Subscription } from 'rxjs';
import { ContractApiService } from '../../Services/ContractApiService';
import { IContractRes } from '../../Models/contractRes';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-contract-detail-page',
  imports: [ContractDetailComponent,JsonPipe,CommonModule],
  templateUrl: './contract-detail-page.html',
  styleUrl: './contract-detail-page.css',
})
export class ContractDetailPage implements OnInit,OnDestroy {
  contract$?:Observable< IContractRes>;
  subscription?:Subscription;
  constructor(
    private contractApi:ContractApiService,
    private route:ActivatedRoute,
    private router:Router 
  ) {
    
    
  }
  deleteContracat($event: string) {
this.contractApi.deleteContract($event).subscribe(
  ()=>{
    this.router.navigate(['/contractPage/contractListPage']);
  }
)
  }
  ngOnInit(): void {
    const id:string=this.route.snapshot.paramMap.get('id')??"";
  this.contract$=this.contractApi.getContract(id)
 
  }
  ngOnDestroy(): void {
     this.subscription?.unsubscribe();
  }

}
