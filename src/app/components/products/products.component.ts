import { Component, OnInit } from '@angular/core';
import {ShopService} from '../../services/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products:any[] = [];
  constructor(
    private shopService: ShopService,
  ) {
   }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.shopService.getProducts();
  }

}
