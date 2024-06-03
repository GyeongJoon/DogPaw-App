import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmiResult3Page } from './bmi-result3.page';

describe('BmiResult3Page', () => {
  let component: BmiResult3Page;
  let fixture: ComponentFixture<BmiResult3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiResult3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
