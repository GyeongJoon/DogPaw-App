import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-temperature-result4',
  templateUrl: './temperature-result4.page.html',
  styleUrls: ['./temperature-result4.page.scss'],
})
export class TemperatureResult4Page implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}
