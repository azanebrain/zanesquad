import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Company } from '../company/company.model';

@Component({
  selector: 'zanesquad-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.sass']
})
export class CompanyCardComponent implements OnInit {

  @Input() company: Company

  @Output() viewCompanyDetails = new EventEmitter<Company>()

  constructor() { }

  public viewDetails() {
    this.viewCompanyDetails.emit(this.company)
  }

  ngOnInit() {
  }

}
