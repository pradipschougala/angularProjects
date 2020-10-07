import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private cartProductCount: number = 0;
  cartItems = [];
  cartItemCount = 0;
  nullInCartCount: number;

  constructor(private navMessage : MessangerService) { }

  ngOnInit(): void {

    this.navMessage.getMessage()
      .subscribe((product: Product) => {
        this.cartDataCount(product)
      }) 
  }

  cartDataCount(product: Product) {

    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }

    // this.cartTotal = 0;
    this.cartItemCount = 0;

    this.cartItems.forEach(item => {
      this.cartItemCount += item.qty;
      // this.cartTotal += (item.qty * item.price)
    })
  }

}
