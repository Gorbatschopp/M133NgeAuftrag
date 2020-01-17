import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CookieShopService } from "../cookie-service/cookie-service";
import { products } from "../products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];

  constructor(
    private cookieService: CookieShopService
  ) { }

  ngOnInit() {
    this.GetItems();
  }

  Add(i: number)
  {
    this.cookieService.IncreaseProductCookie(products.indexOf(this.items[i].product));
    this.GetItems();
  }

  Sub(i: number)
  {
    this.cookieService.DecreaseProductCookie(products.indexOf(this.items[i].product));
    this.GetItems();
  }

  GetItems()
  {
    this.items = [];
    this.cookieService.GetProductCookie().forEach(element => {
      this.items.push(element);
    });
  }
}