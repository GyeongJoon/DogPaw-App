import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistDogListPage } from './regist-dog-list.page';

describe('RegistDogListPage', () => {
  let component: RegistDogListPage;
  let fixture: ComponentFixture<RegistDogListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistDogListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
