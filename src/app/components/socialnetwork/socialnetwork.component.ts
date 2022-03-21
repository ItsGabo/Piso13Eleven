import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-socialnetwork',
  templateUrl: './socialnetwork.component.html',
  styleUrls: ['./socialnetwork.component.css']
})
export class SocialnetworkComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  almostfinish() {
    console.log('hi')
    this.router.navigate(['almostfinish']);
  }
}
