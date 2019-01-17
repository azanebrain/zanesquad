import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsListScreenComponent } from './coupons-list-screen.component';

describe('CouponsListScreenComponent', () => {
  let component: CouponsListScreenComponent;
  let fixture: ComponentFixture<CouponsListScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponsListScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
