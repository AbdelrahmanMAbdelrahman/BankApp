import { Component, OnInit } from '@angular/core';
import { EmployeeFilter } from "../../Components/employee-filter/employee-filter";
import { EmployeeList } from "../../Components/employee-list/employee-list";
import { Observable } from 'rxjs';
import { IEmployeeRes } from '../../Models/employeeRes';
import { EmployeeApiService } from '../../Services/employeeApiService';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ApiResponse } from '../../../../Global/ApiResponse';
 
@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeFilter, EmployeeList,AsyncPipe],
  templateUrl: './employee-list-page.html',
  styleUrl: './employee-list-page.css',
})
export class EmployeeListPage implements OnInit{
 response?:Observable<ApiResponse<IEmployeeRes[]>>;
  constructor(private employeeApi:EmployeeApiService,private route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
this.response=this.employeeApi.GetEmployees();

  }
  private get employeeID(){return this.route.snapshot.paramMap.get("id")??"0";}
}
