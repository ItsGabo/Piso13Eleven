import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  subscriptioncancel() {
    console.log('hi')
    this.router.navigate(['subscriptioncancel']);
  }

}
