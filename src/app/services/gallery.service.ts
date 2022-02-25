import { Injectable } from '@angular/core';
import {Galleries} from '../data/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  getGalleries():any[] {
    return Galleries;
  }
}
