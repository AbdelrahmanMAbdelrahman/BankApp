import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { EmployeeService } from '../../Services/employeeService';
import { IEmployeeRes } from '../../Models/employeeRes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  imports: [RouterLink,FormsModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {
 employeeRes!:IEmployeeRes;
 
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute) {
       
 
  }
  ngOnInit(): void {
 debugger;
 
 const id:number=Number(this.route.snapshot.paramMap.get('id'));
 
this.employeeRes=this.employeeService.findEmployee(id);
 
  }
}
