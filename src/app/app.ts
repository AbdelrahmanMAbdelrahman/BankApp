import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Header } from "./home/header/header";
import { Body } from "./home/body/body";
import { EmployeeService } from './Features/Employees/Services/employeeService';
import { CurrenciesForm } from "./Features/currencies/Components/currencies-form/currencies-form";
import { SignUp } from './Features/currencies/Components/sign-up/sign-up';
import { StudentPage } from "./Features/student/pages/student-page/student-page";
import { PartyService } from './Features/Party/Services/PartyService';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, CurrenciesForm, SignUp, StudentPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[EmployeeService,PartyService]
  
})
export class App {
  protected readonly title = signal('BankApp');  
}
