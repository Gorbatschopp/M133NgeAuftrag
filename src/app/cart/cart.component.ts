import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart-service/cart.service';

import { CookieShopService } from "../cookie-service/cookie-service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];

  constructor(
    private cartService: CartService,
    private cookieService: CookieShopService
  ) { }

  ngOnInit() {
    // this.items = this.cartService.getItems();
    // this.items = this.cookieService.GetProductCookie();
    // this.items = [];
    this.cookieService.GetProductCookie().forEach(element => {
      this.items.push(element);
      // console.log(element);
    });
  }
}