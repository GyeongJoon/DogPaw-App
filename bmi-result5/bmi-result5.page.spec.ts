import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmiResult5Page } from './bmi-result5.page';

describe('BmiResult5Page', () => {
  let component: BmiResult5Page;
  let fixture: ComponentFixture<BmiResult5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiResult5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
