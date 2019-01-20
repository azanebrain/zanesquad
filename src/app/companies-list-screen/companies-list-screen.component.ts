import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company, RetrieveCompaniesResult } from '../company/company.model';
import { CompanyService } from '../company/company.service';
import { ZanesquadStateManagerService } from '../state-manager/state-manager.service';

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
    private state: ZanesquadStateManagerService,
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
    // set company to the store
    this.state.setCurrentCompany(company)
    this.router.navigateByUrl('companies/details')
  }

}
