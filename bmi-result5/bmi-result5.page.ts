import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Router 추가

@Component({
  selector: 'app-bmi-result5',
  templateUrl: './bmi-result5.page.html',
  styleUrls: ['./bmi-result5.page.scss'],
})
export class BmiResult5Page {

  constructor(private router: Router) {}

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}
