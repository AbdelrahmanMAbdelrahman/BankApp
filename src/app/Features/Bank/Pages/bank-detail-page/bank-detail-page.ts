import { Component, OnInit } from '@angular/core';
import { BankDetailComponent } from "../../Components/bank-detail-component/bank-detail-component";
import { BankService } from '../../Services/BankService';
import { Observable } from 'rxjs';
import { BankRes } from '../../Models/BankRes';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-bank-detail-page',
  imports: [BankDetailComponent,AsyncPipe],
  templateUrl: './bank-detail-page.html',
  styleUrl: './bank-detail-page.css',
})
export class BankDetailPage implements OnInit {
 bankRes?:Observable<BankRes>;
  constructor(private bankApi:BankService,private route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.bankRes=this.bankApi.GetBank(this.BankID);
  }
  private get BankID(){
    return this.route.snapshot.paramMap.get("id");
  }
}
