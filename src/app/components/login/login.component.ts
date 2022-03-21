import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // la variable user almacena toda la información del usuario
  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      // console.log(this.user);
      localStorage.setItem('name', this.user.name);
      localStorage.setItem('email', this.user.email);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(['mainpage']);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigate(['mainpage']);
  }

   // signOut(): void {
  //   this.user = new SocialUser;
  //   this.loggedIn = true;
  //   this.authService.signOut();
  // }

  register() {
    console.log('hi')
    this.router.navigate(['register']);
  }

  forgottenPassword(){
    this.router.navigate(['forgottenpassword'])
  }

}
