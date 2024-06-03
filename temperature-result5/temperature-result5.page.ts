import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-temperature-result5',
  templateUrl: './temperature-result5.page.html',
  styleUrls: ['./temperature-result5.page.scss'],
})
export class TemperatureResult5Page implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}
