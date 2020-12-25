import { UserCredential } from './../user-credential.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  invalidLoginError: boolean = false;
  invalidLoginErrorMessage: string = "";
  signinForm: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
      const userCred: UserCredential = new UserCredential(this.signinForm.get('username').value, this.signinForm.get('password').value );

    this.http.post("http://localhost:5000/api/user/authentifiaction", userCred)
      .subscribe(response => {
          const serviceResponse = <any>response;
          if(!serviceResponse.status) {
            this.invalidLogin = true;
            this.invalidLoginErrorMessage = serviceResponse.statusText;
            this.invalidLoginError = true;
          }
          if(serviceResponse.status) {
            localStorage.setItem('jwt', serviceResponse.data)
            this.invalidLogin = false;
            // rediriger sur la page kanbans.
          }


      }, err => {
        this.invalidLogin = true;
      })
  }

  closeMessage() {
    this.invalidLoginError = false;
  }

}
