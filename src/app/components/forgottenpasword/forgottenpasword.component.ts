import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgottenpasword',
  templateUrl: './forgottenpasword.component.html',
  styleUrls: ['./forgottenpasword.component.css']
})
export class ForgottenpaswordComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  newpassword(){
    this.router.navigate(['newpassword'])
  }

}
