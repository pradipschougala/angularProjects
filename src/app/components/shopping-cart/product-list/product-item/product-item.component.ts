import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() productItem : Product;

  constructor(private message : MessangerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.message.sendMessage(this.productItem);

    console.log();
  }

}
