import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCouponScreenComponent } from './edit-coupon-screen.component';

describe('EditCouponScreenComponent', () => {
  let component: EditCouponScreenComponent;
  let fixture: ComponentFixture<EditCouponScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCouponScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCouponScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
