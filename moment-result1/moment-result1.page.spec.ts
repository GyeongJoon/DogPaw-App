import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentResult1Page } from './moment-result1.page';

describe('MomentResult1Page', () => {
  let component: MomentResult1Page;
  let fixture: ComponentFixture<MomentResult1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentResult1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
