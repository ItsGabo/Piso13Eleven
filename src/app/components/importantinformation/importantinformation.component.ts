import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-importantinformation',
  templateUrl: './importantinformation.component.html',
  styleUrls: ['./importantinformation.component.css']
})
export class ImportantinformationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextpage() {
    console.log('hi')
    this.router.navigate(['register']);
  }

}
