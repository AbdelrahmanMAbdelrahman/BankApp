import { Component, NgModule } from '@angular/core';
import { EmployeeService } from '../../Services/employeeService';
import { IEmployeeReq } from '../../Models/employeeReq';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeApiService } from '../../Services/employeeApiService';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
    employee?:IEmployeeReq;
  constructor(
    public employeeService:EmployeeService,
    public employeeApiService:EmployeeApiService,
    private router:Router,
    private route:ActivatedRoute) {
    this.employee=employeeApiService.employeeReq;
  }
saveEmmployee() {
  

this.employeeApiService.onSaveEmployee.emit();
this.router.navigate(['../employeeList'],{relativeTo:this.route});  
 
}
}
