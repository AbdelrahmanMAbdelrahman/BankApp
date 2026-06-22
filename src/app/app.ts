import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Header } from "./home/header/header";
import { Body } from "./home/body/body";
import { EmployeeService } from './Features/Employees/Services/employeeService';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[EmployeeService]
  
})
export class App {
  protected readonly title = signal('BankApp');  
}
