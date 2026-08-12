import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Header } from "./home/header/header";
import { Body } from "./home/body/body";
import { EmployeeService } from './Features/Employees/Services/employeeService';

import { StudentPage } from "./Features/student/pages/student-page/student-page";
import { PartyService } from './Features/Party/Services/PartyService';
import { ContractApiService } from './Features/Contract/Services/ContractApiService';
import { CurrencyService } from './Features/Currency/Services/CurrencyService';
import { DisbursementService } from './Features/Disbursement/Services/DisbursementService';
import { EmployeeApiService } from './Features/Employees/Services/employeeApiService';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[EmployeeApiService,PartyService,ContractApiService,CurrencyService,DisbursementService]
  
})
export class App {
  protected readonly title = signal('BankApp');  
}
