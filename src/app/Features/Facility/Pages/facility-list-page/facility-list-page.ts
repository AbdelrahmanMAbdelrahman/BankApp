import { Component, OnInit } from '@angular/core';
import { FacilityListComponent } from "../../Components/facility-list-component/facility-list-component";
import { IFacilityRes } from '../../Models/IFacilityRes';
import { combineLatest, Observable } from 'rxjs';
import { FacilityService } from '../../Services/FacilityService';
import { AsyncPipe } from '@angular/common';
import { IPaginatedList } from '../../Models/PaginatedList';
import { IPaginatedReq } from '../../Models/IPaginatedReq';
import { FacilityCreateComponent } from "../../Components/facility-create-component/facility-create-component";
import { FacilitySearchComponent } from "../../Components/facility-search-component/facility-search-component";
import { IPartyRes } from '../../../Party/Models/IPartyRes';
import { ICurrencyRes } from '../../../Currency/Models/ICurrencyRes';
import { PartyApiService } from '../../../Party/Services/PartyApiService';
import { CurrencyService } from '../../../Currency/Services/CurrencyService';
import { IParty } from '../../../Party/Models/IParty';
import { GlobalConsts } from '../../../../Consts/GlobalConsts';
import { IFacilityReq } from '../../Models/IFacilityReq';

@Component({
  selector: 'app-facility-list-page',
  imports: [FacilityListComponent, AsyncPipe, FacilitySearchComponent],
  templateUrl: './facility-list-page.html',
  styleUrl: './facility-list-page.css',
})
export class FacilityListPage implements OnInit{
  paginated?:Observable< IPaginatedList<IFacilityRes>>;
  parties?:Observable<IParty[]>;
  currencies?:Observable<ICurrencyRes[]>;
  data?:Observable<{parties: IParty[],currencies:ICurrencyRes[]}>;
  constructor(
    private facilityApi:FacilityService,
    private partyApi:PartyApiService,
    private currencyApi:CurrencyService
  ) {
    
  }
  ngOnInit(): void {
    const paginated:IPaginatedReq={
      pageNumber: 1,
      pageSize: GlobalConsts.pageSize
    }
    this.paginate(paginated);
    this.parties=this.partyApi.getParties();
    this.currencies=this.currencyApi.getCurrencies();
    this.data=combineLatest({
      parties:this.parties,
  currencies:this.currencies
})
}
search(event: IFacilityReq) {
this.paginated=this.facilityApi.search(event);
}
  paginate($event: IPaginatedReq) {
  this.paginated=this.facilityApi.getFacilities($event.pageNumber,$event.pageSize);
  console.log(this.paginated);
  }
}
