import { Component, Input, OnInit } from '@angular/core';
import { IFacilityRes } from '../../Models/IFacilityRes';
import { RouterLink } from "@angular/router";
import { enFacilityType } from '../../Enum/enFacilityType';

@Component({
  selector: 'app-facility-detail-component',
  imports: [RouterLink],
  templateUrl: './facility-detail-component.html',
  styleUrl: './facility-detail-component.css',
})
export class FacilityDetailComponent implements OnInit {
  @Input()facility?:IFacilityRes;
  facilityType=enFacilityType;
  constructor() {
  }
  ngOnInit(): void {
  }
  deleteFacility() {
  throw new Error('Method not implemented.');
  }
}
