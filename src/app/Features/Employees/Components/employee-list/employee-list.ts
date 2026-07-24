import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { IEmployeeRes } from '../../Models/employeeRes';
import { EmployeeService } from '../../Services/employeeService';
import { CommonModule } from '@angular/common';
import { EmployeeApiService } from '../../Services/employeeApiService';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{
employees:IEmployeeRes[]=[];
  constructor(private employeeService:EmployeeService,private employeeApiService:EmployeeApiService) {
    // console.log('employee count is '+this.employees.length);
    // this.employees=employeeService.mapEmployeeToEmployeeRes();
    // console.log(this.employees);
    
    
  }
 async ngOnInit() {
   this.employees=await this.employeeApiService.GetEmployee();
  this.employeeApiService.OnEmployeesChanged.subscribe((emps)=>{
this.employees=emps;
  })

   console.table(this.employees);
  }
} 
