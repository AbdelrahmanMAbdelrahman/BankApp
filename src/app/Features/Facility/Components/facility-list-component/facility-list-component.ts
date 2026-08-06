import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFacilityRes } from '../../Models/IFacilityRes';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { enFacilityType } from '../../Enum/enFacilityType';
import { IPaginatedList } from '../../Models/PaginatedList';
import { IPaginatedReq } from '../../Models/IPaginatedReq';
import { RouterLink } from "@angular/router";
import { GlobalConsts } from '../../../../Consts/GlobalConsts';

@Component({
  selector: 'app-facility-list-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './facility-list-component.html',
  styleUrl: './facility-list-component.css',
})
export class FacilityListComponent implements OnInit  {

  @Input() paginated!:IPaginatedList< IFacilityRes>;
  @Output()OnPaginate=new EventEmitter<IPaginatedReq>();
  FacilityType=enFacilityType;
 pageNumber=0;



ngOnInit(): void {
this.pageNumber=this.paginated.pageNumber;

}


getNext() {
 
const paginatedReq:IPaginatedReq={
  pageSize:GlobalConsts.pageSize,
  pageNumber:++this.pageNumber
}
this.OnPaginate.emit(paginatedReq);
}
getPrevious() {
  if(this.paginated.pageNumber>1){

const paginatedReq:IPaginatedReq={
  pageSize:GlobalConsts.pageSize,
  pageNumber:--this.pageNumber
}
this.OnPaginate.emit(paginatedReq);
}}

}
