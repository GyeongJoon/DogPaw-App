import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Router 추가

@Component({
  selector: 'app-bmi-result1',
  templateUrl: './bmi-result1.page.html',
  styleUrls: ['./bmi-result1.page.scss'],
})
export class BmiResult1Page {

  constructor(private router: Router) {}

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}