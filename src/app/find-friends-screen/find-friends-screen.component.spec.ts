import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFriendsScreenComponent } from './find-friends-screen.component';

describe('FindFriendsScreenComponent', () => {
  let component: FindFriendsScreenComponent;
  let fixture: ComponentFixture<FindFriendsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFriendsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFriendsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
