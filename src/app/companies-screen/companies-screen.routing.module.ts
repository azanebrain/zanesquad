import {
  NgModule,
} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { CompaniesScreenComponent } from './companies-screen.component';
import { CompaniesListScreenComponent } from '../companies-list-screen/companies-list-screen.component';
import { CreateCompanyScreenComponent } from '../create-company-screen/create-company-screen.component';


const routes: Routes = [
  {
    path: 'companies',
    component: CompaniesScreenComponent,
    children: [
      {
        path: 'list',
        component: CompaniesListScreenComponent,
      },
      {
        path: 'create',
        component: CreateCompanyScreenComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/companies/list'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CompaniesScreenRoutingModule { }
