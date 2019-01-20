import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCompanyScreenComponent } from './create-company-screen.component';
import { UserModule } from '../user/user.module';
import { CompanyModule } from '../company/company.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ZanesquadSubmitIfValidModule } from '../submit-if-valid/submit-if-valid.module';
import { RegistrationInviteModule } from '../registration-invite/registration-invite.module';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CreateCompanyScreenComponent],
  imports: [
    CommonModule,
    CompanyModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RegistrationInviteModule,
    RouterModule,
    UserModule,
    ZanesquadSubmitIfValidModule,
  ]
})
export class CreateCompanyScreenModule { }
