import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureResult3Page } from './temperature-result3.page';

describe('TemperatureResult3Page', () => {
  let component: TemperatureResult3Page;
  let fixture: ComponentFixture<TemperatureResult3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureResult3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
