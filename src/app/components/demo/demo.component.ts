import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public _albums = [];

  constructor(
    private router: Router,
    private _lightbox: Lightbox
  ) {
    for (let i = 1; i <= 4; i++) {
      const src = 'assets/demo/img/image' + i + '.jpg'; 
      const caption = 'Image ' + i + ' caption here'; 
      const thumb = 'assets/demo/img/image' + i + '-thumb.jpg'; 
      const album = { 
        src: src, 
        caption: caption, 
        thumb: thumb 
      }; 
      this._albums.push(album);
    }
  }

  ngOnInit(): void {
  }

  correctinformation() {
    console.log('hi')
    this.router.navigate(['correctinformation']);
  }

  open(index: number): void { // open lightbox 
    this._lightbox.open(this._albums, index);
  } 
  
  close(): void { // close lightbox programmatically 
    this._lightbox.close(); 
  } 

}
