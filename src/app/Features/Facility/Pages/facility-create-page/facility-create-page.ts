import { Component, OnInit } from '@angular/core';
import { FacilityCreateComponent } from "../../Components/facility-create-component/facility-create-component";
import { combineLatest, Observable } from 'rxjs';
import { IPartyRes } from '../../../Party/Models/IPartyRes';
import { ICurrencyRes } from '../../../Currency/Models/ICurrencyRes';
import { PartyApiService } from '../../../Party/Services/PartyApiService';
import { CurrencyService } from '../../../Currency/Services/CurrencyService';
import { IParty } from '../../../Party/Models/IParty';
import { AsyncPipe } from '@angular/common';
import { IFacilityReq } from '../../Models/IFacilityReq';
import { FacilityService } from '../../Services/FacilityService';
import { ActivatedRoute, Router } from '@angular/router';
import { IFacilityRes } from '../../Models/IFacilityRes';

@Component({
  selector: 'app-facility-create-page',
  imports: [FacilityCreateComponent,AsyncPipe],
  templateUrl: './facility-create-page.html',
  styleUrl: './facility-create-page.css',
})
export class FacilityCreatePage implements OnInit {
  parties?:Observable<IParty[]>;
  currencies?:Observable<ICurrencyRes[]>;
  facilityRes?:IFacilityRes;

data?:Observable<{
  parties:IParty[],
  currencies: ICurrencyRes[]
}>;
constructor(
  private partyApi:PartyApiService,
  private currencyApi:CurrencyService,
  private facilityApi:FacilityService,
  private route:ActivatedRoute,
  private router:Router
  ) {
  }
  ngOnInit(): void {
    this.parties=this.partyApi.getParties();
    this.currencies=this.currencyApi.getCurrencies();
    if(this.FacilityID!="0"){
      this.facilityApi.getFacility(this.FacilityID).subscribe(
        (facility)=>{this.facilityRes=facility;},
        (error)=>{console.log(error.errors);}
      );
    }
    this.data=combineLatest({
      parties:this.parties,
      currencies:this.currencies
    })
  }
  saveFacility(fac: IFacilityReq) {
    if(this.FacilityID==='0'){
this.AddFacility(fac);
}
 else{
this.editFacility(fac);
 }
  }
  private get FacilityID(){return this.route.snapshot.paramMap.get('id')??"0";}
  private AddFacility(fac:IFacilityReq){
     this.facilityApi.createFacility(fac).subscribe(
  (facility)=>{
    this.router.navigate(['FacilityPage','FacilityListPage']);
  },
  (error)=>{
  console.log(error.errors)
 }
 )
 
  }
  
   editFacility(fac: IFacilityReq) {
    this.facilityApi.EditFacility(fac,this.FacilityID).
    subscribe(
      ()=>{
        this.router.navigate(['/FacilityPage','FacilityListPage']);
      },
      (error)=>{
        console.log("error : ",error.error.errors)
      }
    );
  }
}
