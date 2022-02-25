import { Injectable } from '@angular/core';
import {Products} from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

  getProducts():any[] {
    return Products;
  }
}
