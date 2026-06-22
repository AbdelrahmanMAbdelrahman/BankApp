import { Component, NgModule } from '@angular/core';
import { EmployeeService } from '../../Services/employeeService';
import { IEmployeeReq } from '../../Models/employeeReq';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
    employee?:IEmployeeReq;
  constructor(public employeeService:EmployeeService,private router:Router,private route:ActivatedRoute) {
    this.employee=employeeService.employeeReq;
  }
saveEmmployee() {
  debugger;
this.employeeService.onSaveEmployee.emit(this.employeeService.employeeReq);  
this.router.navigate(['../employeeList'],{relativeTo:this.route});  
}
}
