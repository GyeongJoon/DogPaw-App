import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moment-result1',
  templateUrl: './moment-result1.page.html',
  styleUrls: ['./moment-result1.page.scss'],
})
export class MomentResult1Page{

  constructor(private router: Router) {}

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}
