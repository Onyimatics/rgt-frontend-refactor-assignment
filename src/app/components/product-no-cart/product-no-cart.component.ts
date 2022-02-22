import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-no-cart',
  templateUrl: './product-no-cart.component.html',
  styleUrls: ['./product-no-cart.component.css']
})
export class ProductNoCartComponent implements OnInit {
  @Input() product: any
  constructor() { }

  ngOnInit(): void {
  }

}
