import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit {
  temperature: number | null = null;
  result: string = '';

  constructor(private router: Router) { }

  ngOnInit() { }

  calculateResult() {
    if (this.temperature === null) {
      this.result = '온도를 입력하세요.';
      return;
    }

    if (this.temperature < 36.5) {
      this.router.navigate(['/temperature-result1']);
    } else if (this.temperature >= 36.5 && this.temperature < 37.5) {
      this.router.navigate(['/temperature-result2']);
    } else if (this.temperature >= 37.5 && this.temperature < 39.5) {
      this.router.navigate(['/temperature-result3']);
    } else if (this.temperature >= 39.5 && this.temperature < 40.5) {
      this.router.navigate(['/temperature-result4']);
    } else {
      this.router.navigate(['/temperature-result5']);
    }
  }
}
