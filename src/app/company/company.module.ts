import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from './company.service';
import { ZanesquadEndpointModule } from '../endpoint/endpoint.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ZanesquadEndpointModule,
  ],
  providers: [
    CompanyService
  ]
})
export class CompanyModule { }
