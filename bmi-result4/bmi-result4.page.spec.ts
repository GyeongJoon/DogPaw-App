import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmiResult4Page } from './bmi-result4.page';

describe('BmiResult4Page', () => {
  let component: BmiResult4Page;
  let fixture: ComponentFixture<BmiResult4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiResult4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
