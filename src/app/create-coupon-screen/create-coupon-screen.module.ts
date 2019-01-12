import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCouponScreenComponent } from './create-coupon-screen.component';
import { RegistrationInviteModule } from '../registration-invite/registration-invite.module';
import { UserModule } from '../user/user.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyModule } from '../company/company.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ZanesquadSubmitIfValidModule } from '../submit-if-valid/submit-if-valid.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CouponModule } from '../coupon/coupon.module';

@NgModule({
  declarations: [CreateCouponScreenComponent],
  imports: [
    CommonModule,
    CompanyModule,
    CouponModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RegistrationInviteModule,
    UserModule,
    ZanesquadSubmitIfValidModule,
  ]
})
export class CreateCouponScreenModule { }
