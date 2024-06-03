import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-momentum',
  templateUrl: './momentum.page.html',
  styleUrls: ['./momentum.page.scss'],
})
export class MomentumPage {

  petSize: string; // 'small', 'medium', 'large' 중 하나

  constructor(private router: Router) {
    this.petSize = '';
  }

  momentum() {
    if (this.petSize === 'small') {
      this.router.navigate(['/moment-result1']);
    }
    else if (this.petSize === 'medium') {
      this.router.navigate(['/moment-result2']);
    }
    else if (this.petSize === 'large') {
      this.router.navigate(['/moment-result3']);
    }
  }
}

