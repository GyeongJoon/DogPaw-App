import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-temperature-result2',
  templateUrl: './temperature-result2.page.html',
  styleUrls: ['./temperature-result2.page.scss'],
})
export class TemperatureResult2Page implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}
