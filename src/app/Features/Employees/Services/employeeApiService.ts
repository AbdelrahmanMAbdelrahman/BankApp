import { EventEmitter, Injectable } from "@angular/core";
import { IEmployeeReq } from "../Models/employeeReq";
import { IEmployeeRes } from "../Models/employeeRes";
import { IEmployee } from "../Models/employee";
import { emitDistinctChangesOnlyDefaultValue } from "@angular/compiler";

import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiResponse } from "../../../Global/ApiResponse";
import { GlobalConsts } from "../../../Consts/GlobalConsts";
import { IPaginatedList } from "../../Facility/Models/PaginatedList";

@Injectable({
    providedIn:'root'
})
export class EmployeeApiService{
   private readonly url:string="https://localhost:7125/api/Employee";
   //   OnEmployeesChanged=new Subject<IEmployeeRes[]>();
   constructor(private http:HttpClient) {
   }
   GetEmployees(pageNumber:number):Observable<ApiResponse<IPaginatedList<IEmployeeRes>>>{
     const params=new HttpParams()
      .append("pageSize",GlobalConsts.pageSize)
      .append('pageNumber',pageNumber);
        return this.http.get<ApiResponse<IPaginatedList<IEmployeeRes>>>(this.url,{params});
      }
      UpdateEmployee(req: IEmployeeReq, EmployeeID: string):Observable<any> {
             const formData = new FormData();
for (const [key, value] of formData.entries()) {
  console.log(key, value);
}
  formData.append('fName', req.fName);
  formData.append('lName', req.lName);
  formData.append('userName', req.userName);
  formData.append('email', req.email);
  formData.append('role', req.role);
  formData.append('status', req.status);
  formData.append('title', req.title);
  formData.append('department', req.department);
  formData.append('userHash', req.userHash);
  formData.append('reportsTo', req.reportsTo);
  formData.append('address', req.address);
  formData.append('officePhone', req.officePhone);
  formData.append('mobilePhone', req.mobilePhone);
  formData.append('notes', req.notes);
if(req.image){
  formData.append('image', req.image);}
  for (const [key, value] of formData.entries()) {
  console.log(key, value);
}
        return this.http.put<any>(`${this.url}/${EmployeeID}`,formData);
      }
 findEmployee(id:string):Observable<ApiResponse< IEmployeeRes>> {
    return this.http.get<ApiResponse<IEmployeeRes>>(`${this.url}/${id}`);

 }




 AddNewEmployee(req:IEmployeeReq):Observable<IEmployeeRes>{
    debugger;
    const formData = new FormData();

  formData.append('fName', req.fName);
  formData.append('lName', req.lName);
  formData.append('userName', req.userName);
  formData.append('email', req.email);
  formData.append('role', req.role);
  formData.append('status', req.status);
  formData.append('title', req.title);
  formData.append('department', req.department);
  formData.append('userHash', req.userHash);
  formData.append('reportsTo', req.reportsTo);
  formData.append('address', req.address);
  formData.append('officePhone', req.officePhone);
  formData.append('mobilePhone', req.mobilePhone);
  formData.append('notes', req.notes);

  formData.append('image', req.image??"");
    return this.http.post<IEmployeeRes>(this.url,formData);
 }
 
}