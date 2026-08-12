import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { IEmployeeRes } from '../../Models/employeeRes';

import { CommonModule } from '@angular/common';
import { EmployeeApiService } from '../../Services/employeeApiService';
import { ApiResponse } from '../../../../Global/ApiResponse';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{
@Input() response?:ApiResponse< IEmployeeRes[]>;
  constructor() {
  
    
    
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
