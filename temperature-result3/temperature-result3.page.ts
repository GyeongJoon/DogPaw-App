import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-temperature-result3',
  templateUrl: './temperature-result3.page.html',
  styleUrls: ['./temperature-result3.page.scss'],
})
export class TemperatureResult3Page implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }

}
