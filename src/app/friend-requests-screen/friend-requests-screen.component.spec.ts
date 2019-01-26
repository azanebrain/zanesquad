import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendRequestsScreenComponent } from './friend-requests-screen.component';

describe('FriendRequestsScreenComponent', () => {
  let component: FriendRequestsScreenComponent;
  let fixture: ComponentFixture<FriendRequestsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendRequestsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendRequestsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
