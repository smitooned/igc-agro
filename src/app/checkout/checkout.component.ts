import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  selectedProductSize: any = '';
  selectedProductIndex: any = -1;

  priceA1: any = 500;
  priceA2: any = 600;
  priceA3: any = 700;

  totalA1Cost: any = 0;
  totalA2Cost: any = 0;
  totalA3Cost: any = 0;

  totalCost: any = 0;

  @Input() cart: any;
  @Output() upadteCheckoutStage = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {

    this.totalA1Cost = this.priceA1 * this.cart.items["A1"].length;
    this.totalA2Cost = this.priceA2 * this.cart.items["A2"].length;
    this.totalA3Cost = this.priceA3 * this.cart.items["A3"].length;

    this.totalCost = this.totalA1Cost + this.totalA2Cost + this.totalA3Cost;
  }

  showDetails(selectedProductSize: any, selectedProductIndex: any) {
    if (this.selectedProductSize == selectedProductSize && this.selectedProductIndex == selectedProductIndex) {
      this.selectedProductIndex = 0;
      this.selectedProductSize = '';
    } else {
      this.selectedProductSize = selectedProductSize;
      this.selectedProductIndex = selectedProductIndex;
    }
  }

}
