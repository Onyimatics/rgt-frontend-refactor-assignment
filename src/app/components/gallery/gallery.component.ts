import { Component, OnInit } from '@angular/core';
import {GalleryService} from '../../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images: any[] = [];

  constructor(
    private galleryService: GalleryService,
  ) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.images = this.galleryService.getGalleries();
  }

}
