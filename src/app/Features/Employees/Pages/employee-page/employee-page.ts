import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

import { EmployeeFilter } from "../../Components/employee-filter/employee-filter";
import { EmployeeList } from "../../Components/employee-list/employee-list";
import { EmployeeListPage } from "../employee-list-page/employee-list-page";
import { EmployeeService } from '../../Services/employeeService';
import { IEmployeeReq } from '../../Models/employeeReq';
import { EmployeeApiService } from '../../Services/employeeApiService';
import { Sidebar } from '../../../Shared/sidebar/sidebar';
 

@Component({
  selector: 'app-employee-page',
  imports: [ RouterOutlet,Sidebar],
  templateUrl: './employee-page.html',
  styleUrl: './employee-page.css',
})
export class EmployeePage {

  constructor(
    private employeeService:EmployeeService,
    private employeeApiService:EmployeeApiService) {

    
  }
//   ngOnInit(): void {
// this.employeeApiService.onSaveEmployee.subscribe(( )=>{
//   // this.employeeService.AddNewEmployee();
//   this.employeeApiService.AddNewEmployee();
// }) 
 
// }
}
