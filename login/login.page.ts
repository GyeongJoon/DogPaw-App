import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  username: string | undefined;
  password: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }
   
  login() {
    // Check if both username and password are provided
    if (this.username && this.password) {
      // Prepare JSON data
      const requestData = {
        username: this.username,
        password: this.password
      };

      // Send JSON data to the server
      this.http.post('http://34.64.95.248/d.login.php', requestData)
        .subscribe(
          (response: any) => {
            if (response.success) {
              // 로그인 성공 시에만 메인 페이지로 이동
              this.router.navigate(['/main']);
              console.log('Server Response:', response);
              console.log('Move to main page', response);
            } else {
              // 로그인 실패 시 적절한 처리
              console.log('Login failed:', response.message);
              // 예를 들어 실패 메시지를 사용자에게 표시할 수 있습니다.
            }
          },
          (error) => {
            // Handle error if the request fails
            console.error('Error:', error);
          }
        );

      // 디버깅 내용 추가
      console.log('디버깅 내용 출력');
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      // 입력 폼 초기화
      this.username = '';
      this.password = '';
    } else {
      // 아이디 또는 비밀번호가 비어있을 때 적절한 처리
      console.log('Please enter both username and password.');
      // 예를 들어 사용자에게 경고 메시지를 표시할 수 있습니다.
    }   
  }
}
