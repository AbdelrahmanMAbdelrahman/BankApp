import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { EmployeeService } from '../../Services/employeeService';
import { IEmployeeRes } from '../../Models/employeeRes';
import { FormsModule } from '@angular/forms';
import { EmployeeApiService } from '../../Services/employeeApiService';

@Component({
  selector: 'app-employee-details',
  imports: [RouterLink,FormsModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {
 employeeRes!:IEmployeeRes;
 
  constructor(
    private employeeService:EmployeeService,
    private employeeApiService:EmployeeApiService,
    private route:ActivatedRoute) {
       
 
  }
 async ngOnInit() {
 debugger;
 
 const id=this.route.snapshot.paramMap.get('id');
 
this.employeeRes=await this.employeeApiService.findEmployee(id);
 
  }
}
