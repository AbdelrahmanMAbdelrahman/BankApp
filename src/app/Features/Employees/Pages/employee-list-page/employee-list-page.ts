import { Component, OnInit } from '@angular/core';
import { EmployeeFilter } from "../../Components/employee-filter/employee-filter";
import { EmployeeList } from "../../Components/employee-list/employee-list";
import { Observable } from 'rxjs';
import { IEmployeeRes } from '../../Models/employeeRes';
import { EmployeeApiService } from '../../Services/employeeApiService';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ApiResponse } from '../../../../Global/ApiResponse';
import { IPaginatedList } from '../../../Facility/Models/PaginatedList';
 
@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeFilter, EmployeeList,AsyncPipe],
  templateUrl: './employee-list-page.html',
  styleUrl: './employee-list-page.css',
})
export class EmployeeListPage implements OnInit{
  response?:Observable<ApiResponse<IPaginatedList<IEmployeeRes>>>;
  constructor(private employeeApi:EmployeeApiService,private route:ActivatedRoute) {
    
  }
  Paginate(pageNumber: number) {
  this.response=this.employeeApi.GetEmployees(pageNumber);
  }
  ngOnInit(): void {
this.response=this.employeeApi.GetEmployees(1);

  }
  private get employeeID(){return this.route.snapshot.paramMap.get("id")??"0";}
}
