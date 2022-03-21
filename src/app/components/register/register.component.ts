import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    captcha: string;
    email: string;

  constructor(private router: Router) {
    this.captcha= '';
    this.email= 'Secrect@email.com';
   }

  ngOnInit(): void {
  }
  
  resolved(captchaResponse: string){
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha)
  }

  mainpage() {
    console.log('hi')
    this.router.navigate(['mainpage']);
  }
}
