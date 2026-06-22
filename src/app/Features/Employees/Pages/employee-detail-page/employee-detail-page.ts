import { Component } from '@angular/core';
import { EmployeeDetails } from "../../Components/employee-details/employee-details";

@Component({
  selector: 'app-employee-detail-page',
  imports: [EmployeeDetails],
  templateUrl: './employee-detail-page.html',
  styleUrl: './employee-detail-page.css',
})
export class EmployeeDetailPage {}
