import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailsScreenComponent } from './company-details-screen.component';
import { ZanesquadStateManagerModule } from '../state-manager/state-manager.module';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CouponModule } from '../coupon/coupon.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserModule } from '../user/user.module';
import { RegistrationInviteModule } from '../registration-invite/registration-invite.module';

@NgModule({
  declarations: [CompanyDetailsScreenComponent],
  imports: [
    CommonModule,
    CouponModule,
    MatCardModule,
    MatSnackBarModule,
    RegistrationInviteModule,
    RouterModule,
    UserModule,
    ZanesquadStateManagerModule,
  ]
})
export class CompanyDetailsScreenModule { }
