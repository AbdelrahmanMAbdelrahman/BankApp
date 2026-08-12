import { Component, OnInit } from '@angular/core';
import { EmployeeForm } from "../../Components/employee-form/employee-form";
import { IEmployeeReq } from '../../Models/employeeReq';
import { EmployeeApiService } from '../../Services/employeeApiService';
import { IEmployeeRes } from '../../Models/employeeRes';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-creat-page',
  imports: [EmployeeForm],
  templateUrl: './employee-creat-page.html',
  styleUrl: './employee-creat-page.css',
})
export class EmployeeCreatPage  {
  /**
   *
   */
  constructor(
    private employeeApi:EmployeeApiService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    
  }
  // ngOnInit(): void {
    //   throw new Error('Method not implemented.');
    // }
//  private get employeeID():string{return this.route.snapshot.paramMap.get('id')??"0";};
saveEmployee(req: IEmployeeReq) {
this.createEmployee(req);
}
  createEmployee(req: IEmployeeReq) {
    this.employeeApi.AddNewEmployee(req)
    .subscribe(
      (res:IEmployeeRes)=>{
       this.router.navigate(['/employeePage','employeeDetailPage',res.id])
      }
    );
  }
}
