import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { UserCredential } from './../user-credential.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pwd : string;
  singupForm: FormGroup;
  forbiddenUserName: boolean;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.singupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, [Validators.required, this.confirmPasswordMatched.bind(this)])

    });
  }
  forbiddenNames(control: FormControl): {[s: string]:  boolean} {
    this.checkUniqueUsername(control.value);
    if(this.forbiddenUserName) {
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
          this.router.navigate(['/home/login'])
        }

      }, error => {
          console.log(error)
      })
  }

  private checkUniqueUsername(name: string) {
    this.http.get(`http://localhost:5000/api/user/checkvalidname/${name}`)
      .toPromise()
      .then( response =>{
        this.forbiddenUserName = (<any>response).data;
      })
      .catch(error =>{
        console.log(error);
      })
  }

}
