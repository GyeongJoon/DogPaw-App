import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BmiPage } from './bmi.page';

describe('BmiPage', () => {
  let component: BmiPage;
  let fixture: ComponentFixture<BmiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
