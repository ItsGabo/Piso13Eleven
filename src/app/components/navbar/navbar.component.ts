import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;

  userData: UserData = {
    name: '',
    email: ''
  }

  constructor(private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
    this.userData.name = localStorage.getItem('name');
    this.userData.name = localStorage.getItem('email');
  }

  signOut(): void {
    this.user = new SocialUser;
    this.loggedIn = true;
    this.authService.signOut();
    localStorage.clear();
    this.router.navigate(['login']);
  }

  paymentHistory(){
    this.router.navigate(['paymenthistory'])
  }
  editProfile(){
    this.router.navigate(['editprofile'])
  }
  registeredMails(){
    this.router.navigate(['registeredmails'])
  }
  changeRequest(){
    this.router.navigate(['changerequest'])
  }
  uploadArticle(){
    this.router.navigate(['uploadarticle'])
  }
  onlineConsulting(){
    this.router.navigate(['onlineconsulting'])
  }
  profile(){
    this.router.navigate(['profile'])
  }

}





interface UserData {
  name: string | null,
  email: string | null
}
