import { CookieService } from "ngx-cookie-service";
import { products } from "../products";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export  class CookieShopService
{
    constructor(public cService: CookieService) {
        
    }

    value: Number;
    valueToo: string;

    cookieArray = [];

    public CreateProductCookie(index: number)
    {
        if(this.cService.get(index.toString()) == null)
        {
            this.cService.set(index.toString(), '1');
        }
        else
        {
            this.IncreaseProductCookie(index);
        }
    }

    public IncreaseProductCookie(index: number)
    {
        this.value = +this.cService.get(index.toString()) + 1;
        this.cService.set(index.toString(), this.value.toString());
    }

    public DecreaseProductCookie(index: number)
    {
        this.value = +this.cService.get(index.toString()) - 1;
        if(this.value = 0)
        {
            this.cService.delete(index.toString());
        }
        else
        {
            this.cService.set(index.toString(), this.value.toString());
        }
    }

    public GetProductCookie()
    {
        this.cookieArray = [{product: {name: String, description: String, source: String, price: Number, salePrice: Number}, amount: Number}];
        for (let index = 0; index < products.length; index++) {
            const element = products[index];
            if(this.cService.check(index.toString()))
            {
                console.log( this.cService.get(index.toString()));
                this.cookieArray.push(products[index], this.cService.get(index.toString()));
            }
        }

        // this.cookieArray.forEach(element => {
        //     console.log(element.product);
        // });

        return this.cookieArray;
    }
}