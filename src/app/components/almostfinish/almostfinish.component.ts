import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-almostfinish',
  templateUrl: './almostfinish.component.html',
  styleUrls: ['./almostfinish.component.css']
})
export class AlmostfinishComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  importantinformation() {
    console.log('hi')
    this.router.navigate(['importantinformation']);
  }

}
