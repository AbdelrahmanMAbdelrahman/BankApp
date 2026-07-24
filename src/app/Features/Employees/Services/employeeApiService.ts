import { EventEmitter, Injectable } from "@angular/core";
import { IEmployeeReq } from "../Models/employeeReq";
import { IEmployeeRes } from "../Models/employeeRes";
import { IEmployee } from "../Models/employee";
import { emitDistinctChangesOnlyDefaultValue } from "@angular/compiler";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class EmployeeApiService{
  OnEmployeesChanged=new Subject<IEmployeeRes[]>();
     
     constructor() {
        
        
     
        
    }
    async GetEmployee(){
        debugger;
     var response=  await fetch("https://localhost:7125/api/Employee",
            {method:"get"}
        );
        if(!response.ok){
            const errors=await response.json();
            console.log(errors);
            return;
        }
       const emps=await response.json();
       return emps.value;
    }
async findEmployee(id:any) {
    debugger;
var res=await fetch(`https://localhost:7125/${id}`,{
    method:"get",
    
})
if(!res.ok){
    console.log("failed");
}
let emp=await res.json()
  return emp.value??null;
 }
 employeeReq:IEmployeeReq={
     lName: "",
     fName: "",
     userName: "",
     email: "",
     role: "",
     status: "",
     title: "",
     department: "",
     userHash:"",
     reportsTo: "",
     Address: "",
     officePhone: "",
     mobilePhone: "",
     notes: ""
 };
 employeeRes:IEmployeeRes={
     id: 0,
     lName: "",
     fName: "",
     userName: "",
     email: "",
     role: "",
     status: "",
     title: "",
     address:"",
     department: "",
     userHash:"",
     reportsTo: "",
     Address: "",
     officePhone: "",
     mobilePhone: "",
     notes: ""
 }
 employees:IEmployee[]=[];
 employeesReq:IEmployee[]=[];
 onSaveEmployee=new EventEmitter<IEmployeeReq>();
 
//  mapReqToEmployee(empReq:IEmployeeReq){
//    let employee:IEmployee={
//     //    id: this.employees.length+1,
//        fName: empReq.fName,
//        lName: empReq.lName,
//        userName: empReq.userName,
//        email: empReq.email,
//        role: empReq.role,
//        status: empReq.status,
//        title: empReq.title,
//        department: empReq.department,
//        userHash:empReq.userHash,
//        reportsTo: empReq.reportsTo,
//        Address: empReq.Address,
//        officePhone: empReq.officePhone,
//        mobilePhone: empReq.mobilePhone,
//        notes: empReq.notes
//    }
//    return employee;
//  }
 mapEmployeeToEmployeeRes(){
   let employeesRes:IEmployeeRes[]=[];
    for (let index = 0; index < this.employees.length; index++) {
         employeesRes.push({
       id: this.employees[index].id,
      fName: this.employees[index].fName,
      lName: this.employees[index].lName,
       userName: this.employees[index].userName,
       email: this.employees[index].email,
       role: this.employees[index].role,
       status: this.employees[index].status,
       title: this.employees[index].title,
       address:this.employees[index].Address,
       department: this.employees[index].department,
       userHash:this.employees[index].userHash,
       reportsTo: this.employees[index].reportsTo,
       Address: this.employees[index].Address,
       officePhone: this.employees[index].officePhone,
       mobilePhone: this.employees[index].mobilePhone,
       notes: this.employees[index].notes
   } )
        
    }
   
   return employeesRes;
 }
async AddNewEmployee(){
    console.log("add has been called");
    debugger;
// let employee:IEmployee=this.mapReqToEmployee(this.employeeReq);
await fetch("https://localhost:7125/add",{
     
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(this.employeeReq),
    method:"post"
});
var employees=await this.GetEmployee();
this.OnEmployeesChanged.next(employees);
    // this.employees.push(employee);
 }
 
}