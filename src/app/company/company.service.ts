import { Injectable } from '@angular/core';
import { ZanesquadEndpointService } from '../endpoint/endpoint.service';
import { Company, RetrieveCompaniesResult } from './company.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private endpointService: ZanesquadEndpointService) { }

  public retrieveCompaniesAsync(): Observable<RetrieveCompaniesResult> {
    return this.endpointService.getAsync<RetrieveCompaniesResult>(`${environment.domain}/api/companies/v1`)
  }
}
