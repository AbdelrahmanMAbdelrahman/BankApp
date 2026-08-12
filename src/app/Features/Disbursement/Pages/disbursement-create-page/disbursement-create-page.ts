import { Component, OnInit } from '@angular/core';
import { DisbursementCreateComponent } from "../../Components/disbursement-create-component/disbursement-create-component";
import { combineLatest, Observable } from 'rxjs';
import { IPartyRes } from '../../../Party/Models/IPartyRes';
import { IContractRes } from '../../../Contract/Models/contractRes';
import { PartyApiService } from '../../../Party/Services/PartyApiService';
import { ContractApiService } from '../../../Contract/Services/ContractApiService';
import { IParty } from '../../../Party/Models/IParty';
import { AsyncPipe } from '@angular/common';
import { IFacilityRes } from '../../../Facility/Models/IFacilityRes';
import { FacilityService } from '../../../Facility/Services/FacilityService';
import { IPaginatedList } from '../../../Facility/Models/PaginatedList';
import { DisbursementService } from '../../Services/DisbursementService';
import { DisbursementReq } from '../../Models/DisbursementReq';
import { ActivatedRoute, Router } from '@angular/router';
import { DisbursementRes } from '../../Models/DisbursementRes';

@Component({
  selector: 'app-disbursement-create-page',
  imports: [DisbursementCreateComponent,AsyncPipe],
  templateUrl: './disbursement-create-page.html',
  styleUrl: './disbursement-create-page.css',
})
export class DisbursementCreatePage implements OnInit{
  facilities?:Observable<IPaginatedList< IFacilityRes>>;
  contracts?:Observable<IContractRes[]>;
  disbursement?:DisbursementRes;
  data?:Observable<{
    facilities:IPaginatedList< IFacilityRes>,
    contracts:IContractRes[]
  }>;
  constructor(
    private facilityApi:FacilityService,
    private contractApi:ContractApiService,
    private disbursementApi:DisbursementService,
    private router :Router,
    private route:ActivatedRoute
  ) {
    
  }
  saveDisbursement(req:DisbursementReq) {
    if(this.DisbursementID==="0"){
  this.createDisbursement(req);
    }
else{
this.editDisbursement(req);
}
  }
  createDisbursement(req:DisbursementReq){
this.disbursementApi.AddService(req).
  subscribe(
    (res:DisbursementRes)=>{
this.router.navigate(['DisbursementPage','DisbursementDetailPage',res.id]);
    },
  (error)=>{
    console.log(error.error.errors);
  }
  );
  }
  editDisbursement(req:DisbursementReq){
this.disbursementApi.editDisbursement(req,this.DisbursementID)
.subscribe(
  ()=>{
this.router.navigate(['DisbursementPage','DisbursementDetailPage',this.DisbursementID]);
  },
  (error)=>{
    console.log(error.error.errors);
  }
);
  }
  private get DisbursementID (){return this.route.snapshot.paramMap.get('id')??"0";}
  ngOnInit(): void {
this.facilities=this.facilityApi.getFacilities(1,10);
this.contracts=this.contractApi.getContracts();
this.data=combineLatest({
  facilities:this.facilities,
  contracts:this.contracts
});
this.getDisbursement();
  }

   getDisbursement():void {
    if(this.DisbursementID!=="0"){
    this.disbursementApi.getDisbursement(this.DisbursementID)
    .subscribe(
      (dis)=>{
        this.disbursement=dis;
      },
      (error)=>{
        console.log(error.error.errors);
      }
    );}
  }
}

