import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsScreenComponent } from './company-details-screen.component';

describe('CompanyDetailsScreenComponent', () => {
  let component: CompanyDetailsScreenComponent;
  let fixture: ComponentFixture<CompanyDetailsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
