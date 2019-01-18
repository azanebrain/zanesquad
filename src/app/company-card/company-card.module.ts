import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCardComponent } from './company-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CompanyCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class CompanyCardModule { }
