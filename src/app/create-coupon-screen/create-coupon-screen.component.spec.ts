import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCouponScreenComponent } from './create-coupon-screen.component';

describe('CreateCouponScreenComponent', () => {
  let component: CreateCouponScreenComponent;
  let fixture: ComponentFixture<CreateCouponScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCouponScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCouponScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
