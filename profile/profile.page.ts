import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  selectedItem: any;
  imageUrl: string = ''; // 기본값 할당

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Subscribe to the route parameter changes
    this.route.paramMap.subscribe(params => {
      // Retrieve the selected item from the route parameters
      this.selectedItem = {
        dog_id: params.get('dog_id'),
        dogname: params.get('dogname'),
        dogbreed: params.get('dogbreed'),
        dogsex: params.get('dogsex'),
        dogbirth: params.get('dogbirth'),
        time_stamp: params.get('time_stamp'),
        dogimage: params.get('dogimage')
      };
      this.imageUrl = `http://34.64.95.248/${decodeURIComponent(this.selectedItem.dogimage)}`;
      console.log('Image URL:', this.imageUrl); // 이미지 URL 확인
    });
  }

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }
}
