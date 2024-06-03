import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureResult2Page } from './temperature-result2.page';

describe('TemperatureResult2Page', () => {
  let component: TemperatureResult2Page;
  let fixture: ComponentFixture<TemperatureResult2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureResult2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
