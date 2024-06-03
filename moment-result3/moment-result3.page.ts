import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moment-result3',
  templateUrl: './moment-result3.page.html',
  styleUrls: ['./moment-result3.page.scss'],
})
export class MomentResult3Page{

  constructor(private router: Router) {}

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}