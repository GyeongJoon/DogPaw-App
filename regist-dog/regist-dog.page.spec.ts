import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistDogPage } from './regist-dog.page';

describe('RegistDogPage', () => {
  let component: RegistDogPage;
  let fixture: ComponentFixture<RegistDogPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(RegistDogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
