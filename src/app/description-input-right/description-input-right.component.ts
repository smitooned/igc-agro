import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-description-input-right',
  templateUrl: './description-input-right.component.html',
  styleUrls: ['./description-input-right.component.css']
})
export class DescriptionInputRightComponent implements OnInit {

  constructor() { }
  valueA1=0;

  @Output() cartItemsUpdatedEvent = new EventEmitter<object>();

  @Input() cart: any;

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
}
