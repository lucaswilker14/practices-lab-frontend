import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {RegisterCompanyComponent} from '../register-company/register-company.component';
import {RegisterEmployeeComponent} from '../register-employee/register-employee.component';
import {TableEmployeesComponent} from '../table-employees/table-employees.component';
import {EmployeeDataComponent} from '../employee-data/employee-data.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'company', component: RegisterCompanyComponent},
    {path: 'registerEmployee', component: RegisterEmployeeComponent},
    {path: 'employees', component: TableEmployeesComponent},
    {path: 'employee/:id', component: EmployeeDataComponent},

];


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class RoutingModule {
}
