import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLisetComponent } from './user-liset.component';

describe('UserLisetComponent', () => {
  let component: UserLisetComponent;
  let fixture: ComponentFixture<UserLisetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLisetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLisetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
