import { Routes } from '@angular/router';

import { PageNotFound } from './page-not-found/page-not-found';
import { App } from './app';
import { Home } from './home/home';
import { EmployeePage } from './Features/Employees/Pages/employee-page/employee-page';
import { EmployeeCreatPage } from './Features/Employees/Pages/employee-creat-page/employee-creat-page';

import { EmployeeList } from './Features/Employees/Components/employee-list/employee-list';
import { EmployeeListPage } from './Features/Employees/Pages/employee-list-page/employee-list-page';
import { EmployeeDetailPage } from './Features/Employees/Pages/employee-detail-page/employee-detail-page';
import { PartyListPage } from './Features/Party/Pages/party-list-page/party-list-page';
import { PartyPage } from './Features/Party/Pages/party-page/party-page';
import { PartyCreatePage } from './Features/Party/Pages/party-create-page/party-create-page';
import { PartyDetailCompoent } from './Features/Party/Components/party-detail-compoent/party-detail-compoent';
import { PartyDetailPage } from './Features/Party/Pages/party-detail-page/party-detail-page';
import { ContractListPage } from './Features/Contract/Pages/contract-list-page/contract-list-page';
import { ContractCreatePage } from './Features/Contract/Pages/contract-create-page/contract-create-page';
import { ContractDetailComponent } from './Features/Contract/Components/contract-detail-component/contract-detail-component';
import { ContractPage } from './Features/Contract/Pages/contract-page/contract-page';

export const routes: Routes = [

    {path:"",component:Home},
    {path:"employees",component:EmployeePage,children:[
        
        {path:"employeeCreate",component:EmployeeCreatPage},
        {path:"employeeList",component:EmployeeListPage},
        {path:"employeeDetail/:id",component:EmployeeDetailPage},
    ]},
    {path:"partyPage",component:PartyPage,children:[
        {path:"partyListPage",component:PartyListPage},
        {path:"partyCreatePage/:id",component:PartyCreatePage},
        {path:"partyDetailPage/:id",component:PartyDetailPage},
    ]},
    {path:"contractPage",component:ContractPage,
        children:[
            {path:"contractListPage",component:ContractListPage},
            {path:"contractCreatePage",component:ContractCreatePage},
            {path:"contractDetailPage",component:ContractDetailComponent},
        ]
    },
    {path:"**",component:PageNotFound}
];
