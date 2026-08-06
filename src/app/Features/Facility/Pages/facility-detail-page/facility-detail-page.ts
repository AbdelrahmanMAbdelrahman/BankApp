import { Component, OnInit } from '@angular/core';
import { FacilityDetailComponent } from "../../Components/facility-detail-component/facility-detail-component";
import { Observable } from 'rxjs';
import { IFacilityRes } from '../../Models/IFacilityRes';
import { FacilityService } from '../../Services/FacilityService';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-facility-detail-page',
  imports: [FacilityDetailComponent,AsyncPipe],
  templateUrl: './facility-detail-page.html',
  styleUrl: './facility-detail-page.css',
})
export class FacilityDetailPage implements OnInit {
facility?:Observable<IFacilityRes>;
  constructor(private facilityApi:FacilityService,private route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
this.facility=this.facilityApi.getFacility(this.facilityID);

  }
  private get facilityID (){return this.route.snapshot.paramMap.get("id")??"";}
}
