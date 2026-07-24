import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp implements OnInit{
  forbiddenUsernames=['chris','anna'];
  signUp!:FormGroup;
addHobby() {
  const hobby=new FormControl(null,Validators.required);
(<FormArray>this.signUp.get('hobbies')).push(hobby);
}
submit() {
  
console.log(this.signUp);
}
    genderList=['male','female'];
  ngOnInit(): void {
    this.signUp=new FormGroup({
      'userData':new FormGroup({
      'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]), //i dont understand
      'email':new FormControl(null,[Validators.required],this.forbiddenEmails)
    }),
      'gender':new FormControl('male'),
      'hobbies':new FormArray([])
    });
    this.signUp.valueChanges.subscribe((form)=>{
      console.log('---------'+JSON.stringify( form)+'---------');
    })
    this.signUp.statusChanges.subscribe((form)=>{
      console.log('--------'+form+'-------------');
    })
    this.signUp.setValue(
      {"userData":{"username":"nada@gmail.com","email":"nada@gmail.com"},
      "gender":"female","hobbies":[]});
    this.signUp.patchValue(
      {"userData":{"username":"nada2@gmail.com","email":"nada2@gmail.com"},
      "gender":"female","hobbies":[]});
  }
  get controls(){
    return (this.signUp.get('hobbies') as FormArray).controls;
  }
  forbiddenNames(control:FormControl):{[s:string]:boolean}|null{ 
    return this.forbiddenUsernames.includes(control.value)?
    {'forbiddenUserName':true}:
    null;
  }
  forbiddenEmails(control:AbstractControl):Promise<any>|Observable<any>{
    const promise=new Promise((res,rej)=>{
      setTimeout(() => {
        if(control.value==='test@test.com'){
          res( {'emailIsForbidden':true});
        }
        else{
          res(null);
        }
      }, 1000);
    })
    return promise;
  }
}
 