import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.page.html',
  styleUrls: ['./regist.page.scss'],
})
export class RegistPage {

  name: string | undefined;
  birth: string | undefined;
  email: string | undefined;
  password: string | undefined;
  telephone: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  goToLoginPage() {
    if (this.allFieldsFilled()) {
      this.router.navigate(['/login']);
    } else {
      console.error('Error: All fields are required.');
    }
  }

  regist() {
    if (!this.allFieldsFilled()) {
      console.error('Error: All fields are required.');
      return;
    }

    // Prepare JSON data
    const requestData = {
      name: this.name,
      birth: this.birth,
      email: this.email,
      password: this.password,
      telephone: this.telephone
    };

    // Send JSON data to the server
    this.http.post('http://34.64.95.248/d.regist.php', requestData)
      .subscribe(
        (response) => {
          // Handle the server response if needed
          console.log('Server Response:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          // Handle error if the request fails
          console.error('Error:', error);
        }
      );

    // Reset input form
    this.resetForm();
  }

  private allFieldsFilled(): boolean {
    return !!this.name && !!this.birth && !!this.email && !!this.password && !!this.telephone;
  }

  private resetForm(): void {
    this.name = '';
    this.birth = '';
    this.email = '';
    this.password = '';
    this.telephone = '';
  }
}
