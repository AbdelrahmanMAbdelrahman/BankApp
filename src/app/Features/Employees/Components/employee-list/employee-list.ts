import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from "@angular/router";
import { IEmployeeRes } from '../../Models/employeeRes';

import { CommonModule } from '@angular/common';
import { EmployeeApiService } from '../../Services/employeeApiService';
import { ApiResponse } from '../../../../Global/ApiResponse';
import { IPaginatedList } from '../../../Facility/Models/PaginatedList';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{
  @Input() response?:ApiResponse<IPaginatedList< IEmployeeRes>>;
  @Output()OnPaginate=new EventEmitter<number>();
  constructor() {
    
    
    
  }
  GetPrevious(pageNumber: number) {
  this.OnPaginate?.emit(--pageNumber);
  }
  Getnext(pageNumber: number) {
  this.OnPaginate?.emit(++pageNumber);
  }
 async ngOnInit() {
  console.log('employees',this.response);
//    this.employees=await this.employeeApiService.GetEmployee();
//   this.employeeApiService.OnEmployeesChanged.subscribe((emps)=>{
// this.employees=emps;
//   })

//    console.table(this.employees);
  }
} 
