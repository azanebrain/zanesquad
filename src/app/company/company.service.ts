import { Injectable } from '@angular/core';
import { ZanesquadEndpointService } from '../endpoint/endpoint.service';
import { RetrieveCompaniesResult, CreateCompanyPayload, CreateCompaniesResult } from './company.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private endpointService: ZanesquadEndpointService) { }

  public createCompaniesAsync(payload: CreateCompanyPayload): Observable<CreateCompaniesResult> {
    return this.endpointService.postAsync<CreateCompaniesResult>(`${environment.domain}/api/companies/v1`, payload)
  }

  public retrieveCompaniesAsync(): Observable<RetrieveCompaniesResult> {
    return this.endpointService.getAsync<RetrieveCompaniesResult>(`${environment.domain}/api/companies/v1`)
  }
}
