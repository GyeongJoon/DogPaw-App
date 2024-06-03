import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Router 추가

@Component({
  selector: 'app-water-result',
  templateUrl: './water-result.page.html',
  styleUrls: ['./water-result.page.scss'],
})
export class WaterResultPage implements OnInit { // OnInit 인터페이스 구현 추가

  waterIntake: number;

  constructor(private route: ActivatedRoute, private router: Router) { // Router 주입 추가
    this.waterIntake = 0;
  }

  ngOnInit() {
    // Get the dogAge value passed from the age page
    this.route.queryParams.subscribe(params => {
      if (params && params['waterIntake']) {
        this.waterIntake = params['waterIntake'];
      }
    });
  }

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }
}
