import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentumPage } from './momentum.page';

describe('MomentumPage', () => {
  let component: MomentumPage;
  let fixture: ComponentFixture<MomentumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
