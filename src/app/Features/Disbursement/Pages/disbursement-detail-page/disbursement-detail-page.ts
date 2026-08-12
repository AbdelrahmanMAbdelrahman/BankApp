import { Component, OnInit } from '@angular/core';
import { DisbursementDetailComponent } from "../../Components/disbursement-detail-component/disbursement-detail-component";
import { Observable } from 'rxjs';
import { DisbursementRes } from '../../Models/DisbursementRes';
import { DisbursementService } from '../../Services/DisbursementService';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-disbursement-detail-page',
  imports: [DisbursementDetailComponent,AsyncPipe],
  templateUrl: './disbursement-detail-page.html',
  styleUrl: './disbursement-detail-page.css',
})
export class DisbursementDetailPage implements OnInit{
  disbursement?:Observable<DisbursementRes>;
  constructor(
    private disbursementApi:DisbursementService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    
  }
  ngOnInit(): void {
    this.disbursement=this.disbursementApi.getDisbursement(this.disbursementID);
  }
  private get disbursementID(){
    return this.route.snapshot.paramMap.get('id')??"0";
  }
  reviewDisbursement() {
  // this.disbursementApi.reviewDisbursement(this.disbursementID)
  // .subscribe(
  //   ()=>{
  //     // this.router.navigate(['/DisbursementPage','DisbursementListPage']);
  //   },
  //   (error)=>{
  //     console.log(error.error.errors);
  //   }
  // );
  }
  deleteDisbursement() {
 this.disbursementApi.deleteDisbursement(this.disbursementID)
  .subscribe(
    ()=>{
      this.router.navigate(['/DisbursementPage','DisbursementListPage']);
    },
    (error)=>{
      console.log(error.error.errors);
    }
  );
  }
}
