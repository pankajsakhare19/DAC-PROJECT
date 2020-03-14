import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPwdComponent } from './submit-pwd.component';

describe('SubmitPwdComponent', () => {
  let component: SubmitPwdComponent;
  let fixture: ComponentFixture<SubmitPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
