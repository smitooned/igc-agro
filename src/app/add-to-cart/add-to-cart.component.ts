import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor() { }
  valueA1=0;

  @Output() cartItemsUpdatedEvent = new EventEmitter<object>();
  @Output() submitCartEvent = new EventEmitter<object>();

  @Input() cart: any;
  @Input() priceList: any;
  @Input() allItemsConfigured: any;

  ngOnInit(): void {
  }

  updateCart(event:any, num:any, productSize:any, productType:any, packOf: any) {
    let cartUpdate = {
      event: event,
      countUpdate: parseInt(num),
      productSize: productSize,
      productType: productType,
      packOf: packOf
    };
    this.cartItemsUpdatedEvent.emit(cartUpdate);
  }

  getCount(packOf:any, productSize:any) {
    if(this.cart.items[productSize].length > 0) {
      let count = this.cart.items[productSize].filter((x:any) => x["packOf"] == packOf).length;
      return count
    } else {
      return 0
    }
  }
  // submitOrder(event: any, stageComplete: any, message: any) {
  //   let stageSubmitted = {
  //     event: event,
  //     stageComplete: stageComplete,
  //     message: message
  //   }
  //   this.submitCartEvent.emit(stageSubmitted);
  // }
}
