import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesScreenComponent } from './companies-screen.component';

describe('CompaniesScreenComponent', () => {
  let component: CompaniesScreenComponent;
  let fixture: ComponentFixture<CompaniesScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
