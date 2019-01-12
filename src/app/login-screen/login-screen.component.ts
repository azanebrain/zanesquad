import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user/user.service';
import { User, LoginResponse } from '../user/user.model';
import { Router } from '@angular/router';
import { ZanesquadEndpointService } from '../endpoint/endpoint.service';

@Component({
  selector: 'zanesquad-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.sass']
})
export class LoginScreenComponent implements OnInit {

  // Whether the form is being processed or not
  public loading = false
  public loginForm: FormGroup

  constructor(
    private endpointService: ZanesquadEndpointService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.initForm()
  }

  /**
   * Passes the login credentials to the backend and either navigates to the Coupons screen, or shows an error
   */
  public submitFormAsync() {
    this.loading = true
    this.userService.loginUserAsync(this.loginForm.value)
      .subscribe((loginResponse: LoginResponse) => {
        const loggedInUserCredentials = {
          username: this.loginForm.value.username,
          password: this.loginForm.value.password,
        }
        this.endpointService.setUser(loggedInUserCredentials)
        this.userService.setUser(loggedInUserCredentials)
        this.router.navigateByUrl('/coupons')
      },
      err => {
        this.snackBar.open('Login failed. Please doublecheck your username and password', null, {
          duration: 3000,
        });
      })
      .add(() => {
        this.loading = false
      })
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

}
