import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginScreenComponent } from './login-screen.component';
import { LoginScreenRoutingModule } from './login-screen.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule } from '../user/user.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { ZanesquadSubmitIfValidModule } from '../submit-if-valid/submit-if-valid.module';

@NgModule({
  declarations: [LoginScreenComponent],
  imports: [
    CommonModule,
    LoginScreenRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule,
    UserModule,
    ZanesquadSubmitIfValidModule
  ]
})
export class LoginScreenModule { }
