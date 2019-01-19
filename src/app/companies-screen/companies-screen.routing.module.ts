import {
  NgModule,
} from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';
import { CompaniesScreenComponent } from './companies-screen.component';
import { CompaniesListScreenComponent } from '../companies-list-screen/companies-list-screen.component';


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
