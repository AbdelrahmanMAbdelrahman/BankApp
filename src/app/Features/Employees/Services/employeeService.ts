import { EventEmitter, Injectable } from "@angular/core";
import { IEmployeeReq } from "../Models/employeeReq";
import { IEmployeeRes } from "../Models/employeeRes";
import { IEmployee } from "../Models/employee";
import { emitDistinctChangesOnlyDefaultValue } from "@angular/compiler";

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
 findEmployee(id: string): IEmployeeRes {
//    let emp:IEmployee=this.employees[this.employees.findIndex(e=>e.id===id)];
//  return emp;
   console.log("Requested Id =", id);

  console.log("Employees =", this.employees);

  const emp = null;//this.employees.find(e => e.id === id);

  console.log("Found =", emp);

  return emp!;
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
     userHash: "",
     reportsTo: "",
     address: "",
     officePhone: "",
     mobilePhone: "",
     notes: "",
     image: new File([],"")
 };
//  employeeRes:IEmployeeRes={
//      id: 0,
//      lName: "",
//      fName: "",
//      userName: "",
//      email: "",
//      role: "",
//      status: "",
//      title: "",
//      address:"",
//      department: "",
//      userHash:"",
//      reportsTo: "",
//      Address: "",
//      officePhone: "",
//      mobilePhone: "",
//      notes: ""
//  }
 employees:IEmployee[]=[];
 employeesReq:IEmployee[]=[];
 onSaveEmployee=new EventEmitter<IEmployeeReq>();
 
 mapReqToEmployee(empReq:IEmployeeReq){
   let employee:IEmployee={
       id: this.employees.length+1,
       fName: empReq.fName,
       lName: empReq.lName,
       userName: empReq.userName,
       email: empReq.email,
       role: empReq.role,
       status: empReq.status,
       title: empReq.title,
       address:empReq.address,
       department: empReq.department,
       userHash:empReq.userHash,
       reportsTo: empReq.reportsTo,
       Address: empReq.address,
       officePhone: empReq.officePhone,
       mobilePhone: empReq.mobilePhone,
       notes: empReq.notes
   }
   return employee;
 }
//  mapEmployeeToEmployeeRes(){
//    let employeesRes:IEmployeeRes[]=[];
//     for (let index = 0; index < this.employees.length; index++) {
//          employeesRes.push({
//        id: this.employees[index].id,
//       fName: this.employees[index].fName,
//       lName: this.employees[index].lName,
//        userName: this.employees[index].userName,
//        email: this.employees[index].email,
//        role: this.employees[index].role,
//        status: this.employees[index].status,
//        title: this.employees[index].title,
//        address: this.employees[index].Address,
//        department: this.employees[index].department,
//        userHash:this.employees[index].userHash,
//        reportsTo: this.employees[index].reportsTo,
//        Address: this.employees[index].Address,
//        officePhone: this.employees[index].officePhone,
//        mobilePhone: this.employees[index].mobilePhone,
//        notes: this.employees[index].notes
//    } )
        
//     }
   
//    return employeesRes;
//  }
//  AddNewEmployee(){
// let employee:IEmployee=this.mapReqToEmployee(this.employeeReq);
//     this.employees.push(employee);
//  }
 
 }