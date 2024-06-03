import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureResult5Page } from './temperature-result5.page';

describe('TemperatureResult5Page', () => {
  let component: TemperatureResult5Page;
  let fixture: ComponentFixture<TemperatureResult5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureResult5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
