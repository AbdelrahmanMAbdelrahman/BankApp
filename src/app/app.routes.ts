import { Routes } from '@angular/router';

import { PageNotFound } from './page-not-found/page-not-found';
import { App } from './app';
import { Home } from './home/home';
import { EmployeePage } from './Features/Employees/Pages/employee-page/employee-page';
import { EmployeeCreatPage } from './Features/Employees/Pages/employee-creat-page/employee-creat-page';

import { EmployeeList } from './Features/Employees/Components/employee-list/employee-list';
import { EmployeeListPage } from './Features/Employees/Pages/employee-list-page/employee-list-page';
import { EmployeeDetailPage } from './Features/Employees/Pages/employee-detail-page/employee-detail-page';

export const routes: Routes = [

    {path:"",component:Home},
    {path:"employees",component:EmployeePage,children:[
        
        {path:"employeeCreate",component:EmployeeCreatPage},
        {path:"employeeList",component:EmployeeListPage},
        {path:"employeeDetail/:id",component:EmployeeDetailPage},
    ]},
    {path:"**",component:PageNotFound}
];
