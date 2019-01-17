import { TestBed } from '@angular/core/testing';

import { ZanesquadStateManagerService } from './state-manager.service';

describe('StateManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZanesquadStateManagerService = TestBed.get(ZanesquadStateManagerService);
    expect(service).toBeTruthy();
  });
});
