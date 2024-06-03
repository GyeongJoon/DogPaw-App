import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmiResult1Page } from './bmi-result1.page';

describe('BmiResult1Page', () => {
  let component: BmiResult1Page;
  let fixture: ComponentFixture<BmiResult1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiResult1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
