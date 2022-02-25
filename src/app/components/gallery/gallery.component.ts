import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images = [
    {
      img:"https://source.unsplash.com/1000x800",
      desc:"No",
    },
    {
      img:"https://source.unsplash.com/1000x802",
      desc:"Repetitive",
    },
    {
      img:"https://source.unsplash.com/1000x804",
      desc:"Code",
    },
    {
      img:"https://source.unsplash.com/1000x806",
      desc:"Allowed",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
