import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsScreenComponent } from './coupons-screen.component';

describe('CouponsScreenComponent', () => {
  let component: CouponsScreenComponent;
  let fixture: ComponentFixture<CouponsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
