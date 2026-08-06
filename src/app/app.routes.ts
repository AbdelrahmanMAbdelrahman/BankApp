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
import { ContractDetailPage } from './Features/Contract/Pages/contract-detail-page/contract-detail-page';
import { CurrencyPage } from './Features/Currency/Pages/currency-page/currency-page';
import { CurrencyListPage } from './Features/Currency/Pages/currency-list-page/currency-list-page';
import { CurrencyCreatePage } from './Features/Currency/Pages/currency-create-page/currency-create-page';
import { CurrencyDetailPage } from './Features/Currency/Pages/currency-detail-page/currency-detail-page';
import { FacilityPage } from './Features/Facility/Pages/facility-page/facility-page';
import { FacilityListPage } from './Features/Facility/Pages/facility-list-page/facility-list-page';
import { FacilityCreatePage } from './Features/Facility/Pages/facility-create-page/facility-create-page';
import { FacilityDetailPage } from './Features/Facility/Pages/facility-detail-page/facility-detail-page';

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
            {path:"contractCreatePage/:id",component:ContractCreatePage},
            {path:"contractDetailPage/:id",component:ContractDetailPage},
        ]
    },
    {
        path:"CurrencyPage",component:CurrencyPage,
        children:[
            {path:"CurrencyListPage",component:CurrencyListPage},
            {path:"CurrencyCreatePage/:id",component:CurrencyCreatePage},
            {path:"CurrencyDetailPage/:id",component:CurrencyDetailPage},
        ]
    },
    {
        path:"FacilityPage",component:FacilityPage,
        children:[
            {path:"FacilityListPage",component:FacilityListPage},
            {path:"FacilityCreatePage/:id",component:FacilityCreatePage},
            {path:"FacilityDetailPage/:id",component:FacilityDetailPage},
        ]
    },
    {path:"**",component:PageNotFound}
];
