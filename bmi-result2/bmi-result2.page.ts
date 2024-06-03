import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Router 추가

@Component({
  selector: 'app-bmi-result2',
  templateUrl: './bmi-result2.page.html',
  styleUrls: ['./bmi-result2.page.scss'],
})
export class BmiResult2Page {

  constructor(private router: Router) {}

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}