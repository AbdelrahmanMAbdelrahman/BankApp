import { Component } from '@angular/core';
import { PartyFormComponent } from "../../../Party/Components/party-form-component/party-form-component";
import { ContractFormComponent } from "../../Components/contract-form-component/contract-form-component";

@Component({
  selector: 'app-contract-create-page',
  imports: [PartyFormComponent, ContractFormComponent],
  templateUrl: './contract-create-page.html',
  styleUrl: './contract-create-page.css',
})
export class ContractCreatePage {}
