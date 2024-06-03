import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {

  constructor(private router: Router) {}

  goToLoginPage() {
    this.router.navigate(['/regist-dog-list']); 
  }

  goToAgePage() {
    this.router.navigate(['/age']); 
  }

  goToBmiPage() {
    this.router.navigate(['/bmi']); 
  }

  goToKcalPage() {
    this.router.navigate(['/kcal']); 
  }

  goToMomentumPage() {
    this.router.navigate(['/momentum']); 
  }

  goToTemperaturePage() {
    this.router.navigate(['/temperature']); 
  }

  goToWaterPage() {
    this.router.navigate(['/water']); 
  }
}
