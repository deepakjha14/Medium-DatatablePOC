import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtcustomComponent } from './dtcustom.component';

describe('DtcustomComponent', () => {
  let component: DtcustomComponent;
  let fixture: ComponentFixture<DtcustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtcustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtcustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
