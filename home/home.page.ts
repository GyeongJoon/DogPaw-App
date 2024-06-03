import { Component } from '@angular/core';
// splash를 위해 추가된 부분
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  showSplash = true;

  constructor(private router: Router, private loadingController: LoadingController) {}

  ionViewDidEnter() {
    this.presentLoading();
    setTimeout(() => {
      this.hideSplash();
    }, 3000); // 페이지가 로딩되는 타이머 시간, 3초 설정
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 3000, // 페이지가 로딩되는 타이머 시간, 3초 설정
    });
    return await loading.present();
  }

  hideSplash() {
    this.showSplash = false;
    this.router.navigate(['/login']); // 이동할 페이지
  }

}
