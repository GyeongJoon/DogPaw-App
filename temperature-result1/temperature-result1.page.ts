import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-temperature-result1',
  templateUrl: './temperature-result1.page.html',
  styleUrls: ['./temperature-result1.page.scss'],
})
export class TemperatureResult1Page implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}
