import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentResult2Page } from './moment-result2.page';

describe('MomentResult2Page', () => {
  let component: MomentResult2Page;
  let fixture: ComponentFixture<MomentResult2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentResult2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
