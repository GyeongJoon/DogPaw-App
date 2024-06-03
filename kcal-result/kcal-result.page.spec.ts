import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KcalResultPage } from './kcal-result.page';

describe('KcalResultPage', () => {
  let component: KcalResultPage;
  let fixture: ComponentFixture<KcalResultPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KcalResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
