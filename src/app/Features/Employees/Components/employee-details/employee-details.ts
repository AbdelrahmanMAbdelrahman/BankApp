import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { EmployeeService } from '../../Services/employeeService';
import { IEmployeeRes } from '../../Models/employeeRes';
import { FormsModule } from '@angular/forms';
import { EmployeeApiService } from '../../Services/employeeApiService';
import { ApiResponse } from '../../../../Global/ApiResponse';

@Component({
  selector: 'app-employee-details',
  imports: [RouterLink,FormsModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {

@Input() employeeRes?:ApiResponse< IEmployeeRes>;
 
  constructor(
  ) {
       
 
  }
  get employeeImg():string{
    if(!this.employee?.image){
      return `D:/Angular/Bank/BankApp/src/Assets/images/image.png`
    }
    return `https://localhost:7125/api/File/${this.employeeRes?.value.image.id}`;
  } 
  get employee():IEmployeeRes|undefined{
    return this.employeeRes?.value;
  }
 async ngOnInit() {


  }
}
