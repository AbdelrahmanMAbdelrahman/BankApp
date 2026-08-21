import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { IEmployeeReq } from '../../Models/employeeReq';
import { CommonModule } from '@angular/common';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeApiService } from '../../Services/employeeApiService';
import { IEmployeeRes } from '../../Models/employeeRes';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnInit{
  imageSelected:string|null=null;
  employeeForm!:FormGroup;
  @Input()Employee?:IEmployeeRes;
  @Output() OnSaveEmployee=new EventEmitter<IEmployeeReq>();
  constructor(
    public employeeApiService:EmployeeApiService,
    private router:Router,
    private route:ActivatedRoute) {
      
    }
    ngOnInit(): void {
      this.initForm();
      debugger;
      if(this.Employee)
        this.fillForm();
    }
    clearImage(fileInput:HTMLInputElement) {
    this.imageSelected=null;
    this.employeeForm.patchValue({
      image:null
    })
    }
    selectFile(event: Event) {
    const input=event.target as HTMLInputElement;
    if(!input || input.files?.length===0)return;
    const file=input!.files![0];
    this.employeeForm.patchValue({image:file});
    this.imageSelected=URL.createObjectURL(file);
    }
  initForm(){
    this.employeeForm=new FormGroup({
      'fName':new FormControl(null,Validators.required),
      'lName':new FormControl(null,Validators.required),
      'userName':new FormControl(null,Validators.required),
      'email':new FormControl(null,Validators.required),
      'role':new FormControl(null,Validators.required),
      'status':new FormControl(null,Validators.required),
      'title':new FormControl(null,Validators.required),
      'department':new FormControl(null,Validators.required),
      'userHash':new FormControl(null,Validators.required),
      'reportsTo':new FormControl(null,Validators.required),
      'address':new FormControl(null,Validators.required),
      'officePhone':new FormControl(null,Validators.required),
      'mobilePhone':new FormControl(null,Validators.required),
      'notes':new FormControl(null),
      'image':new FormControl<File|null>(null)
    });
  }
  fillForm(){
    this.employeeForm.patchValue({
      "fName":this.Employee?.fName,
      "lName":this.Employee?.lName,
      "userName":this.Employee?.userName,
      "email":this.Employee?.email,
      "role":this.Employee?.role,
      "status":this.Employee?.status,
      "title":this.Employee?.title,
      "department":this.Employee?.department,
      "userHash":this.Employee?.userHash,
      "reportsTo":this.Employee?.reportsTo,
      "address":this.Employee?.address,
      "officePhone":this.Employee?.officePhone,
      "mobilePhone":this.Employee?.mobilePhone,
      "notes":this.Employee?.notes,
      // "image":this.Employee?.image,
    });
  this.imageSelected=`https://localhost:7125/api/File/${this.Employee?.image.id}`;
  }
saveEmmployee() {
let employee:IEmployeeReq= {
  fName: this.employeeForm?.get('fName')?.value ?? "",
  lName: this.employeeForm?.get('lName')?.value ?? "",
  userName: this.employeeForm?.get('userName')?.value ?? "",
  email: this.employeeForm?.get('email')?.value ?? "",
  role: this.employeeForm?.get('role')?.value ?? "",
  status: this.employeeForm?.get('status')?.value ?? "",
  title: this.employeeForm?.get('title')?.value ?? "",
  department: this.employeeForm?.get('department')?.value ?? "",
  userHash: this.employeeForm?.get('userHash')?.value ?? "",
  reportsTo: this.employeeForm?.get('reportsTo')?.value ?? "",
  address: this.employeeForm?.get('address')?.value ?? "",
  officePhone: this.employeeForm?.get('officePhone')?.value ?? "",
  mobilePhone: this.employeeForm?.get('mobilePhone')?.value ?? "",
  notes: this.employeeForm?.get('notes')?.value ?? "",
  image: this.employeeForm?.get('image')?.value ?? ""
}
console.log(employee);
 this.OnSaveEmployee?.emit(employee);
}
}
 
