import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Router 추가

@Component({
  selector: 'app-bmi-result4',
  templateUrl: './bmi-result4.page.html',
  styleUrls: ['./bmi-result4.page.scss'],
})
export class BmiResult4Page {

  constructor(private router: Router) {}

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}