import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kcal',
  templateUrl: './kcal.page.html',
  styleUrls: ['./kcal.page.scss'],
})
export class KcalPage {
  weight: number | null = null; // 강아지의 체중(kg)
  age: number | null = null; // 강아지의 나이
  activityLevel!: string; // 활동량 (low, normal, high 중 하나)

  constructor(private router: Router) { }

  kcal() {
    // weight와 age가 입력되었는지 확인
    if (this.weight !== null && this.age !== null) {
      let bmr = this.calculateBMR(this.weight, this.age);
      let totalCalories = this.calculateTotalCalories(bmr, this.activityLevel);

      // 결과 페이지로 이동하면서 기초대사량과 권장 칼로리 값을 전달
      this.router.navigate(['/kcal-result'], {
        state: {
          bmr: bmr.toFixed(1), // 소수점 첫째 자리까지 표시
          totalCalories: totalCalories.toFixed(1) // 소수점 첫째 자리까지 표시
        }
      });
    } else {
      console.error('체중과 나이를 입력해주세요.');
    }
  }

  calculateBMR(weight: number, age: number): number {
    return 70 * (weight ** 0.75);
  }

  calculateTotalCalories(bmr: number, activityLevel: string): number {
    let multiplier = 1.2;
    if (activityLevel === 'normal') {
      multiplier = 1.5;
    } else if (activityLevel === 'high') {
      multiplier = 1.8;
    }
    return bmr * multiplier;
  }
}
