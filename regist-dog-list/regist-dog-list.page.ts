import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-regist-dog-list',
  templateUrl: './regist-dog-list.page.html',
  styleUrls: ['./regist-dog-list.page.scss'],
})
export class RegistDogListPage implements OnInit {

  data: any[] = [];
  selectedItem: any;

  constructor(
    private http: HttpClient, 
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadData();
  }

  ionViewWillEnter() {
    this.loadData();  // 데이터를 다시 로드
  }

  loadData() {
    this.http.get<any[]>('http://34.64.95.248/d.doglist.php').subscribe(
      (response) => {
        this.data = response;
        this.loadImages();  // 이미지를 로드
        this.cdr.detectChanges(); // 데이터 변경 사항을 즉시 반영
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  loadImages() {
    const phpScriptUrl = 'http://34.64.95.248/d.dogprofileimage.php';
  
    this.http.get(phpScriptUrl, { responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            console.log('이미지를 읽기가 완료했습니다.');
          } else {
            console.error('이미지를 읽는 동안 오류가 발생했습니다.');
          }
        };
        reader.readAsDataURL(response);
      },
      (error: HttpErrorResponse) => {
        console.error('이미지 다운로드 오류:', error.message);
        if (error.error instanceof ErrorEvent) {
          console.error('오류 발생:', error.error.message);
        } else {
          console.error(`백엔드가 코드 ${error.status}을 반환했으며, 본문은: ${error.error}`);
        }
      }
    );
  }

  showDetails(item: any) {
    this.selectedItem = item;
    console.log('Selected item details:', item);
    // 선택된 항목의 정보를 객체로 전달하여 프로필 페이지로 이동
    this.router.navigate(['/profile', { 
      dog_id: item.dog_id, 
      dogname: item.dogname, 
      dogbreed: item.dogbreed, 
      dogsex: item.dogsex, 
      dogbirth: item.dogbirth, 
      time_stamp: item.time_stamp, 
      dogimage: encodeURIComponent(item.dogimage) // URL 인코딩
    }]);
  }

  goToRegistDogPage() {
    this.router.navigate(['/regist-dog']); 
  }

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }
}
