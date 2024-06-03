import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-water',
  templateUrl: './water.page.html',
  styleUrls: ['./water.page.scss'],
})
export class WaterPage {
  weight: string = '';
  activityLevel: string = '';
  waterIntake: string = '';

  constructor(private router: Router) {}

  water() {
    let multiplier: number;

    switch (this.activityLevel) {
      case 'low':
        multiplier = 50;
        break;
      case 'normal':
        multiplier = 60;
        break;
      case 'high':
        multiplier = 70;
        break;
      default:
        multiplier = 60;
    }

    const intake = parseFloat(this.weight.toString()) * multiplier; // ml 단위로 계산
    this.waterIntake = `${(intake / 1000).toFixed(2)}`; // liters 단위로 변환하여 소수점 둘째 자리까지 표기
    

    // 결과값을 water_result 페이지로 넘기기
    this.router.navigate(['/water-result'], { queryParams: { waterIntake: this.waterIntake } });
  }
}
