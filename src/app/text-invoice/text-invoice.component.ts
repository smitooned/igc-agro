import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-text-invoice',
  templateUrl: './text-invoice.component.html',
  styleUrls: ['./text-invoice.component.css']
})
export class TextInvoiceComponent implements OnInit {

  constructor() { }
  @Input() cart: any;
  orderText: any;

  ngOnInit(): void {
  }
  buildOrder() {
    this.orderText = `
    Order ID: $cart.orderID

    {{item.rxtx.to}}'s {{item.productType}}
    `;
    console.log(this.orderText);
  }
}
