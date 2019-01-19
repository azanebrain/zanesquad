import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company, RetrieveCompaniesResult } from '../company/company.model';
import { CompanyService } from '../company/company.service';

@Component({
  selector: 'zanesquad-companies-list-screen',
  templateUrl: './companies-list-screen.component.html',
  styleUrls: ['./companies-list-screen.component.sass']
})
export class CompaniesListScreenComponent implements OnInit {

  public companies: Company[]
  public loading = false

  constructor(
    private companyService: CompanyService,
    private router: Router,
  ) { }

  public createNewCompany() {
    this.router.navigateByUrl('companies/create')
  }

  ngOnInit() {
    this.loadCompaniesAsync()
  }

  private loadCompaniesAsync() {
    this.loading = true
    this.companyService.retrieveCompaniesAsync()
      .subscribe((response: RetrieveCompaniesResult) => {
        this.companies = response.data
      },
        error => {
          console.log(`error: `, error)
        })
      .add(() => {
        this.loading = false
      })
  }

  public viewCompanyDetails(company: Company) {
    console.log(`navigate to company details.`)
  }

}
