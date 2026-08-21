import { Component, OnInit } from '@angular/core';
import { EmployeeForm } from "../../Components/employee-form/employee-form";
import { IEmployeeReq } from '../../Models/employeeReq';
import { EmployeeApiService } from '../../Services/employeeApiService';
import { IEmployeeRes } from '../../Models/employeeRes';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../../Global/ApiResponse';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-employee-creat-page',
  imports: [EmployeeForm,AsyncPipe],
  templateUrl: './employee-creat-page.html',
  styleUrl: './employee-creat-page.css',
})
export class EmployeeCreatPage implements OnInit  {
  /**
   *
   */
  employeeRes?:Observable<ApiResponse< IEmployeeRes>>;
  constructor(
    private employeeApi:EmployeeApiService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    
  }
  ngOnInit(): void {
    this.getEmployee();
  }
  // ngOnInit(): void {
    //   throw new Error('Method not implemented.');
    // }
//  private get employeeID():string{return this.route.snapshot.paramMap.get('id')??"0";};
saveEmployee(req: IEmployeeReq) {
  if(this.EmployeeID=='0'){
this.createEmployee(req);}
else{
  this.UpdateEmployee(req,this.EmployeeID);
}
}
  UpdateEmployee(req: IEmployeeReq, EmployeeID: string) {
    this.employeeApi.UpdateEmployee(req,EmployeeID)
    .subscribe(
      ()=>this.router.navigate(['/EmployeePage','EmployeeDetailPage',EmployeeID]),
      (error)=>console.log(error.error.errors)
      
      );
  }
  createEmployee(req: IEmployeeReq) {
    this.employeeApi.AddNewEmployee(req)
    .subscribe(
      (res:IEmployeeRes)=>{
       this.router.navigate(['/EmployeePage','EmployeeDetailPage',res.id])
      },
      (error)=>{
        console.log(error.error.errors);
      }
    );
  }
  getEmployee(){
    this.employeeRes=this.employeeApi.findEmployee(this.EmployeeID);
  }
 get EmployeeID ():string{return this.route.snapshot.paramMap.get('id')??""}
}
