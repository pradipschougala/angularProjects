import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

   count = 0;
  countby;
  @Input() cartItem : any;
 

  constructor() { }

  ngOnInit(): void {
    // console.log(this.cartItem.qty) ;
  }


}
