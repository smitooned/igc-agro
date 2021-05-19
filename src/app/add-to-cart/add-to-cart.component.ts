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
  @Input() allItemsConfigured: any;

  ngOnInit(): void {
  }

  updateCart(event:any, num:any, productSize:any, productType:any) {
    let cartUpdate = {
      event: event,
      countUpdate: parseInt(num),
      productSize: productSize,
      productType: productType
    };
    this.cartItemsUpdatedEvent.emit(cartUpdate);
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
