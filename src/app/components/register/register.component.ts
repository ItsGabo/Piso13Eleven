import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    captcha: string;
    email: string;

    myForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder
  ) {
    this.captcha= '';
    this.email= 'Secrect@email.com';

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      passwordCheck: ['', [Validators.required]],
      lastNameOne: ['', [Validators.required]],
    });
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

  saveData() {
    console.log(this.myForm.value);
  }
}
