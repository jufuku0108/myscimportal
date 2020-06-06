import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernavListComponent } from './headernav-list.component';

describe('HeadernavListComponent', () => {
  let component: HeadernavListComponent;
  let fixture: ComponentFixture<HeadernavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadernavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadernavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
