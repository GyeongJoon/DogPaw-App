import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // 라우터와 라우터 활성화를 위한 ActivatedRoute를 추가합니다.

@Component({
  selector: 'app-age-result',
  templateUrl: './age-result.page.html',
  styleUrls: ['./age-result.page.scss'],
})
export class AgeResultPage implements OnInit { // OnInit 인터페이스를 구현합니다.

  dogAge: number; // 강아지 나이를 저장할 변수를 선언합니다.

  constructor(private route: ActivatedRoute, private router: Router) { // ActivatedRoute와 Router를 주입합니다.
    this.dogAge = 0; // 강아지 나이 변수를 초기화합니다.
  }

  ngOnInit() {
    // 나이 페이지에서 전달된 dogAge 값을 가져옵니다.
    this.route.queryParams.subscribe(params => {
      if (params && params['dogAge']) {
        this.dogAge = params['dogAge']; // 가져온 dogAge 값을 변수에 할당합니다.
      }
    });
  }

  goToMenuPage() {
    this.router.navigate(['/main']); // 메인 페이지로 이동하는 메서드를 정의합니다.
  }
}
