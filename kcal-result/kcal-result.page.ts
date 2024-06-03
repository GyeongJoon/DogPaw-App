import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kcal-result',
  templateUrl: './kcal-result.page.html',
  styleUrls: ['./kcal-result.page.scss'],
})
export class KcalResultPage {
  bmr!: number; // 기초대사량
  totalCalories!: number; // 권장 칼로리

  constructor(private route: ActivatedRoute ,private router: Router) {}

  ngOnInit() {
    // Get the data passed from the previous page
    const state = window.history.state;
    if (state) {
      this.bmr = parseFloat(state['bmr']);
      this.totalCalories = parseFloat(state['totalCalories']);
    }
  }

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }
}
