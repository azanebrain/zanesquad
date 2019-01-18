import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Company } from '../company/company.model';

@Component({
  selector: 'zanesquad-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.sass']
})
export class CompanyCardComponent implements OnInit {

  @Input() company: Company

  @Output() editCompany = new EventEmitter<Company>()

  constructor() { }

  public edit() {
    this.editCompany.emit(this.company)
  }

  ngOnInit() {
  }

}
