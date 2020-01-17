import { Component, OnInit } from '@angular/core';
import { CookieShopService } from "../cookie-service/cookie-service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public cookieService: CookieShopService) { }

  amount: number;

  ngOnInit() {
  this.getAmount();
  }

  public getAmount()
  {
    this.amount = this.cookieService.GetTotalAmount();
    setTimeout( () => {this.getAmount();}, 100);
    // new Promise( resolve => setTimeout(resolve, 5000) )
    // this.getAmount();
  }
}