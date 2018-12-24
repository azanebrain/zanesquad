import { TestBed } from '@angular/core/testing';

import { ZanesquadEndpointService } from './endpoint.service';

describe('EndpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZanesquadEndpointService = TestBed.get(ZanesquadEndpointService);
    expect(service).toBeTruthy();
  });
});
