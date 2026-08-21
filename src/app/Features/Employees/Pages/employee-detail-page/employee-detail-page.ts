import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from "../../Components/employee-details/employee-details";
import { ApiResponse } from '../../../../Global/ApiResponse';
import { IEmployeeRes } from '../../Models/employeeRes';
import { Observable } from 'rxjs';
import { EmployeeApiService } from '../../Services/employeeApiService';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-employee-detail-page',
  imports: [EmployeeDetails,AsyncPipe],
  templateUrl: './employee-detail-page.html',
  styleUrl: './employee-detail-page.css',
})
export class EmployeeDetailPage implements OnInit {
response?:Observable< ApiResponse<IEmployeeRes>>;
  constructor(
    private employeeService:EmployeeApiService,private route:ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.response=this.employeeService.findEmployee(this.empID);
  }
  private get empID():string{return this.route.snapshot.paramMap.get("id")??"0";}
}
