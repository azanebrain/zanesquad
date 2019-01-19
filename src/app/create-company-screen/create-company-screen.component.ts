import { Component, OnInit } from '@angular/core';
import { CreateCompanyPayload } from '../company/company.model';
import { UserService } from '../user/user.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CompanyService } from '../company/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

enum CREATE_COMPANY_SCREEN_STATES {
  LOADING,
  LOGGED_IN,
  LOGGED_OUT,
}

@Component({
  selector: 'zanesquad-create-company-screen',
  templateUrl: './create-company-screen.component.html',
  styleUrls: ['./create-company-screen.component.sass']
})
export class CreateCompanyScreenComponent implements OnInit {

  public createCompanyForm: FormGroup
  public state: CREATE_COMPANY_SCREEN_STATES = CREATE_COMPANY_SCREEN_STATES.LOADING
  public states = CREATE_COMPANY_SCREEN_STATES

  constructor(
    private companyService: CompanyService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.retrieveUserAsync()
    this.initForm()
  }

  public submitForm() {
    const payload: CreateCompanyPayload = this.createCompanyForm.value

    this.companyService.createCompaniesAsync(payload)
      .subscribe((result: any) => {
        this.snackBar.open(`${payload.name} has been successfully added!`, 'Okay')
          .afterDismissed().subscribe(() => {
            this.router.navigate(['companies'])
          })
      },
        err => {
          this.snackBar.open(`An error occurred trying to create a coupon: ${err.message}`, null, {
            duration: 3000,
          });
        })
  }

  private initForm() {
    this.createCompanyForm = this.formBuilder.group({
      name: ['', Validators.required],
      url: ['', Validators.required],
    })
  }

  private async retrieveUserAsync() {
    const user = await this.userService.getUser()
    if (!user) {
      this.state = CREATE_COMPANY_SCREEN_STATES.LOGGED_OUT
    } else {
      this.state = CREATE_COMPANY_SCREEN_STATES.LOGGED_IN
    }
  }
}
