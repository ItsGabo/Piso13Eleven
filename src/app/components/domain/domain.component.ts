import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  siteidentity() {
    console.log('hi')
    this.router.navigate(['siteidentity']);
  }
}
