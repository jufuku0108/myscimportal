import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesslogListComponent } from './accesslog-list.component';

describe('AccesslogListComponent', () => {
  let component: AccesslogListComponent;
  let fixture: ComponentFixture<AccesslogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesslogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesslogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
