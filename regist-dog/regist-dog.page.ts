import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-regist-dog',
  templateUrl: './regist-dog.page.html',
  styleUrls: ['./regist-dog.page.scss'],
})
export class RegistDogPage {

  dogname: string | undefined;
  dogbreed: string | undefined;
  dogsex: string | undefined;
  dogbirth: string | undefined;
  dogimage: File | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  goToListPage() {
    if (this.allFieldsFilled()) {
      this.router.navigate(['/regist-dog-list']);
    } else {
      console.error('Error: All fields are required.');
    }
  }

  regist_dog() {
    if (!this.allFieldsFilled()) {
      console.error('Error: All fields are required.');
      return;
    }

    // Prepare JSON data
    const formData = new FormData();
    formData.append('dogname', this.dogname || '');
    formData.append('dogbreed', this.dogbreed || '');
    formData.append('dogsex', this.dogsex || '');
    formData.append('dogbirth', this.dogbirth || '');
    

  //   // Convert dogbirth to ISO string if it exists
  // if (this.dogbirth instanceof Date) {
  //   const dogBirthISOString = this.dogbirth.toISOString();
  //   formData.append('dogbirth', dogBirthISOString);
  // }


    if (this.dogimage) {
      formData.append('dogimage', this.dogimage, this.dogimage.name);
    }

    this.http.post('http://34.64.95.248/d.regist_dog.php', formData)
      .subscribe(
        (response) => {
          
          console.log('Server Response:', response);
        },
        (error) => {
          console.error('Error:', error);
        }
      );

    // 초기화
    this.dogname = '';
    this.dogbreed = '';
    this.dogsex = '';
    this.dogbirth = undefined;
    this.dogimage = undefined;
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.dogimage = event.target.files[0];
    }
  }

  private allFieldsFilled(): boolean {
    return !!this.dogname && !!this.dogbreed && !!this.dogsex && !!this.dogbirth;
  }

  goToMenuPage() {
    this.router.navigate(['/main']); 
  }
}
