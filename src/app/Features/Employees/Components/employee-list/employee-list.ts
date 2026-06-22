import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { IEmployeeRes } from '../../Models/employeeRes';
import { EmployeeService } from '../../Services/employeeService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
employees:IEmployeeRes[]=[];
  constructor(private employeeService:EmployeeService) {
    console.log('employee count is '+this.employees.length);
    this.employees=employeeService.mapEmployeeToEmployeeRes();
    console.log(this.employees);
    
  }
}
