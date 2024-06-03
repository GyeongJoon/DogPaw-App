import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage {

  birthday: string;
  petSize: string; // 'small', 'medium', 'large' 중 하나

  constructor(private router: Router) {
    this.birthday = '';
    this.petSize = '';
  }

  age() {
    // 나이 계산 로직
    const birthDate = new Date(this.birthday);
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
      age--;
    }

    // 강아지의 첫 1년은 모두에게 15년으로 계산
    let dogAge = 0;
    if (age >= 1) {
      dogAge = 15;
    }

    // 강아지의 크기에 따른 추가 나이 계산
    if (age > 1) {
      switch(this.petSize) {
        case 'small':
          // 소형견은 이후 각 연도당 5년으로 계산
          dogAge += (age - 1) * 5;
          break;
        case 'medium':
          // 중형견은 이후 각 연도당 6년으로 계산
          dogAge += (age - 1) * 6;
          break;
        case 'large':
          // 대형견은 이후 각 연도당 7년으로 계산
          dogAge += (age - 1) * 7;
          break;
        default:
          // 크기 정보 없음
          console.log("Pet size is not specified.");
          break;
      }
    }

    // 결과 페이지로 이동
    this.router.navigate(['/age-result'], { queryParams: { dogAge: dogAge } });
  }
}
