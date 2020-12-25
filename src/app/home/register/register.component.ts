import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';

import { UserCredential } from './../user-credential.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pwd : string;
  singupForm: FormGroup;
  forbiddenUserNames = ['abdellux'];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, [Validators.required, this.confirmPasswordMatched.bind(this)])

    });
  }
  forbiddenNames(control: FormControl): {[s: string]:  boolean} {
    if(this.forbiddenUserNames.indexOf(control.value) != -1) {
      return {'nameIsValid': true};
    }
    return null;
  }

  confirmPasswordMatched(control: FormControl): {[s: string]: boolean} {
    if(this.pwd != control.value) {
      return {'passwordIsValid': true};
    }
    return null;
  }
  onSubmit() {
    const userCred: UserCredential = new UserCredential(this.singupForm.get('username').value, this.singupForm.get('password').value)
    this.http.post("http://localhost:5000/api/user/register",userCred)
      .subscribe( response => {
        const data = <any>response;
        if(!data.status) {
            //error le username existe
        } else {
          // rediger vers la page d'authentification
        }

      }, error => {
          console.log(error);
      })
  }

}
