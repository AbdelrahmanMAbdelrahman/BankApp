import { Component } from '@angular/core';
import { EmployeeFilter } from "../../Components/employee-filter/employee-filter";
import { EmployeeList } from "../../Components/employee-list/employee-list";

@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeFilter, EmployeeList],
  templateUrl: './employee-list-page.html',
  styleUrl: './employee-list-page.css',
})
export class EmployeeListPage {}
