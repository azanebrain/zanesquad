import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCouponScreenComponent } from './edit-coupon-screen.component';
import { RouterModule } from '@angular/router';
import { ZanesquadStateManagerModule } from '../state-manager/state-manager.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ZanesquadSubmitIfValidModule } from '../submit-if-valid/submit-if-valid.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [EditCouponScreenComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    ZanesquadStateManagerModule,
    ZanesquadSubmitIfValidModule,
  ]
})
export class EditCouponScreenModule { }
