import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Router 추가

@Component({
  selector: 'app-bmi-result3',
  templateUrl: './bmi-result3.page.html',
  styleUrls: ['./bmi-result3.page.scss'],
})
export class BmiResult3Page {

  constructor(private router: Router) {}

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}