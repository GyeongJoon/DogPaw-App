import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BmiPage {

  constructor(private router: Router) {}

  goToResult1() {
    this.router.navigate(['/bmi-result1']); 
  }

  goToResult2() {
    this.router.navigate(['/bmi-result2']); 
  }

  goToResult3() {
    this.router.navigate(['/bmi-result3']); 
  }

  goToResult4() {
    this.router.navigate(['/bmi-result4']); 
  }

  goToResult5() {
    this.router.navigate(['/bmi-result5']); 
  }

}
