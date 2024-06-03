import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureResult1Page } from './temperature-result1.page';

describe('TemperatureResult1Page', () => {
  let component: TemperatureResult1Page;
  let fixture: ComponentFixture<TemperatureResult1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureResult1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
