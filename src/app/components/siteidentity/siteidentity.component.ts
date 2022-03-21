import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-siteidentity',
  templateUrl: './siteidentity.component.html',
  styleUrls: ['./siteidentity.component.css']
})
export class SiteidentityComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  demo() {
    console.log('hi')
    this.router.navigate(['demo']);
  }
}
