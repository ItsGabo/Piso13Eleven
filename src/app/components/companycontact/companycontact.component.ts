import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-companycontact',
  templateUrl: './companycontact.component.html',
  styleUrls: ['./companycontact.component.css']
})
export class CompanycontactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  socialnetwork() {
    console.log('hi')
    this.router.navigate(['socialnetwork']);
  }
}
