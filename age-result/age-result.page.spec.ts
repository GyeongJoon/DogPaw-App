import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgeResultPage } from './age-result.page';

describe('AgeResultPage', () => {
  let component: AgeResultPage;
  let fixture: ComponentFixture<AgeResultPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
