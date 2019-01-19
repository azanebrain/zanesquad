import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesListScreenComponent } from './companies-list-screen.component';

describe('CompaniesListScreenComponent', () => {
  let component: CompaniesListScreenComponent;
  let fixture: ComponentFixture<CompaniesListScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesListScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
