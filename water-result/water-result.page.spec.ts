import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaterResultPage } from './water-result.page';

describe('WaterResultPage', () => {
  let component: WaterResultPage;
  let fixture: ComponentFixture<WaterResultPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
