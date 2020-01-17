import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart-service/cart.service';

import { CookieShopService } from "../cookie-service/cookie-service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product; 

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private cookieService: CookieShopService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
  
  addToCart(product) {
    console.log('Your product has been added to the cart!');
    this.cookieService.CreateProductCookie(products.indexOf(product));
  }
}