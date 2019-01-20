import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompanyScreenComponent } from './create-company-screen.component';

describe('CreateCompanyScreenComponent', () => {
  let component: CreateCompanyScreenComponent;
  let fixture: ComponentFixture<CreateCompanyScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCompanyScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompanyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
