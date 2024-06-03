import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moment-result2',
  templateUrl: './moment-result2.page.html',
  styleUrls: ['./moment-result2.page.scss'],
})
export class MomentResult2Page{

  constructor(private router: Router) {}

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}