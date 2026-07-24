import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { IParty } from '../../Models/IParty';
import { PartyService } from '../../Services/PartyService';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyApiService } from '../../Services/PartyApiService';

@Component({
  selector: 'app-party-form-component',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './party-form-component.html',
  styleUrl: './party-form-component.css',
})
export class PartyFormComponent implements OnInit {

  party:IParty={
    id: "",
    internalCode: '',
    partyGroupName: '',
    active: false,
    nativeName: '',
    name: '',
    partyCode: ''
  };
   partyForm!:FormGroup;
   constructor(
    private partyService:PartyService,
    private router:Router,
    private route:ActivatedRoute,
    private partyApi:PartyApiService
  ) {
   }
  ngOnInit(): void {
    this.partyForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'nativeName':new FormControl(null,Validators.required),
      'partyCode':new FormControl(null,Validators.required),
      'internalCode':new FormControl(null,Validators.required),
      'partyGroupName':new FormControl(null,Validators.required),
      'active':new FormControl(null,Validators.required),
    });
    this.route.paramMap.subscribe(
      (params)=>{
        debugger;
 this.party.id=params.get('id')??"";
if( this.party.id!=="0"){
  this.partyApi.getParty( this.party.id)
  .subscribe(
    (prty:IParty)=>{
if(prty!==null){
    this.partyForm.setValue({
      name:prty.name,//Property 'name' does not exist on type 'never'.
      nativeName:prty.nativeName,
      partyCode:prty.partyCode,
      internalCode:prty.internalCode,
      active:prty.active,
      partyGroupName:prty.partyGroupName,
    })
  }
    }
  );
  
}
}
    )
  }
submit()
{
  // debugger;
  this.party= {
    id:this.party?.id??"",
    name:this.partyForm.get('name')?.value,
    partyCode:this.partyForm.get('partyCode')?.value,
    nativeName:this.partyForm.get('nativeName')?.value,
    internalCode:this.partyForm.get('internalCode')?.value,
    partyGroupName:this.partyForm.get('partyGroupName')?.value,
    active:this.partyForm.get('active')?.value,
  }
  
  this.partyApi.OnSaveParty.next(this.party);

  this.partyForm.reset();
  this.router.navigate(['../../partyListPage'],{relativeTo:this.route});
  console.log(this.partyApi.Parties);
}
}
