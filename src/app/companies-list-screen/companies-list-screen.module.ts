import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesListScreenComponent } from './companies-list-screen.component';
import { CompanyCardModule } from '../company-card/company-card.module';
import { CompanyModule } from '../company/company.module';
import { MatButtonModule } from '@angular/material/button';
import { ZanesquadStateManagerModule } from '../state-manager/state-manager.module';

@NgModule({
  declarations: [CompaniesListScreenComponent],
  imports: [
    CommonModule,
    CompanyCardModule,
    CompanyModule,
    MatButtonModule,
    ZanesquadStateManagerModule,
  ]
})
export class CompaniesListScreenModule { }
