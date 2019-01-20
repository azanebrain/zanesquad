import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesScreenComponent } from './companies-screen.component';
import { CompaniesScreenRoutingModule } from './companies-screen.routing.module';
import { CompaniesListScreenModule } from '../companies-list-screen/companies-list-screen.module';
import { CreateCompanyScreenModule } from '../create-company-screen/create-company-screen.module';
import { CompanyDetailsScreenModule } from '../company-details-screen/company-details-screen.module';

@NgModule({
  declarations: [CompaniesScreenComponent],
  imports: [
    CommonModule,
    CompaniesListScreenModule,
    CompaniesScreenRoutingModule,
    CompanyDetailsScreenModule,
    CreateCompanyScreenModule,
  ]
})
export class CompaniesScreenModule { }
