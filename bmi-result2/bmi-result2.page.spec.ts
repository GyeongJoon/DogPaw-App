import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmiResult2Page } from './bmi-result2.page';

describe('BmiResult2Page', () => {
  let component: BmiResult2Page;
  let fixture: ComponentFixture<BmiResult2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiResult2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
