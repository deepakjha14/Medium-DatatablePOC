import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTAjaxComponent } from './dtajax.component';

describe('DTAjaxComponent', () => {
  let component: DTAjaxComponent;
  let fixture: ComponentFixture<DTAjaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DTAjaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DTAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
