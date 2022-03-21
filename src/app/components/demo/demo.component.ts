import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  correctinformation() {
    console.log('hi')
    this.router.navigate(['correctinformation']);
  }

}
