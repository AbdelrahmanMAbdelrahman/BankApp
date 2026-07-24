import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from "@angular/forms";
import { IStudent } from '../../services/student';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-student-create',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './student-create.html',
  styleUrl: './student-create.css',
})
export class StudentCreate implements OnInit {
  students:IStudent[]=[];
  student?:IStudent;
  studentForm!:FormGroup;
saveStudent() {
  this.student= {
  name:this.studentForm.get('name')?.value,
  email:this.studentForm.get('email')?.value,
  phone:this.studentForm.get('phone')?.value,
  age:this.studentForm.get('age')?.value
}
this.students.push(this.student!);
this.studentForm.reset();
}
  ngOnInit(): void {
this.studentForm=new FormGroup({
  'name':new FormControl(null,Validators.required),
  'email':new FormControl(null,Validators.required),
  'phone':new FormControl(null,Validators.required),
  'age':new FormControl(null,Validators.required),
});



this.studentForm.valueChanges.subscribe((value)=>{
  console.log(JSON.stringify(value));
})
console.log(this.students);
  }
 
}
