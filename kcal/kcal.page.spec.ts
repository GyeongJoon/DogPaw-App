import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KcalPage } from './kcal.page';

describe('KcalPage', () => {
  let component: KcalPage;
  let fixture: ComponentFixture<KcalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KcalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
