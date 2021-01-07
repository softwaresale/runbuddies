import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFlowComponent } from './signup-flow.component';

describe('SignupFlowComponent', () => {
  let component: SignupFlowComponent;
  let fixture: ComponentFixture<SignupFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
