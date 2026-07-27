import { Component, OnDestroy, OnInit } from '@angular/core';
import { PartyFormComponent } from "../../../Party/Components/party-form-component/party-form-component";
import { ContractFormComponent } from "../../Components/contract-form-component/contract-form-component";
import { ContractApiService } from '../../Services/ContractApiService';
import { Observable, Subscription } from 'rxjs';
import { IContractReq } from '../../Models/contractReq';
import { ActivatedRoute, Router } from '@angular/router';
import { IContractRes } from '../../Models/contractRes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contract-create-page',
  imports: [CommonModule, ContractFormComponent],
  templateUrl: './contract-create-page.html',
  styleUrl: './contract-create-page.css',
})
export class ContractCreatePage implements OnInit,OnDestroy {
subscription?:Subscription;
contractRes?:Observable< IContractRes>;

  constructor(
    private contractApi:ContractApiService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    
    
  }
  ngOnInit(): void {
    this.loadContractRes();
  
  }
loadContractRes(){
  const id:string=this.route.snapshot.paramMap.get('id')??"";
  if(id!="0")
  this.contractRes= this.contractApi.getContract(id);
}

  saveContract(contractReq:IContractReq){
    debugger;
//  this.subscription=this.contractApi.OnSaveContract.subscribe(
//       (contract:IContractReq)=>{
        let id:string=this.route.snapshot.paramMap.get('id')??"";
        if(id==="0"){
          console.log(id);
          console.log("create");
        this.contractApi.createContract(contractReq);
      }else{
        console.log("update");
        this.contractApi.updateContract(contractReq,id);
      }
        this.router.navigate(['/contractPage/contractListPage'])
      //}
    //);
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
