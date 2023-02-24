import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public fb: FormBuilder,private router:Router, private logService: LoginService){

  }

  hide = true;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    role: ['', [Validators.required]],
  });

  login(){
    // console.log("here")
    let data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      role: this.loginForm.value.role,
    }

    this.logService.validateLogin(data).subscribe((value) => {
      console.log(value[0])
      if(value[0].role==='Admin'){
        this.router.navigate(['admin']);
      }
      else if(value[0].role==='User'){
        this.router.navigate(['user']);
      }
      else{
        alert("Invalid Credentials")
      }
    }
    , err => {
      alert("Invalid Credentials")
    }
    );
    
  }

}
