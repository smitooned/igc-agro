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

  priceA1: any = 499;
  priceA2: any = 599;
  priceA3: any = 699;

  totalA1_10_Cost: any = 0;
  totalA2_6_Cost: any = 0;
  totalA2_10_Cost: any = 0;
  totalA3_6_Cost: any = 0;
  totalA3_10_Cost: any = 0;
  amountDonated: any = 0;
  totalCost: any = 0;

  @Input() cart: any;
  @Input() priceList: any;
  @Output() upadteCheckoutStage = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {

    this.totalA1_10_Cost = this.priceList['COVIDWarriorKit']['A1_10'] * this.cart.items["A1"].length;

    this.totalA2_6_Cost = (this.priceList['COVIDWarriorKit']['A2_6'] * this.getCount('6', "A2"));
    this.totalA2_10_Cost = (this.priceList['COVIDWarriorKit']['A2_10'] * this.getCount('10', "A2"));

    this.totalA3_6_Cost = (this.priceList['COVIDWarriorKit']['A3_6'] * this.getCount('6', "A3"));
    this.totalA3_10_Cost = (this.priceList['COVIDWarriorKit']['A3_10'] * this.getCount('10', "A3"));

    this.amountDonated = 99 * (this.cart.items["A1"].length + this.cart.items["A2"].length + this.cart.items["A3"].length);

    this.totalCost = this.totalA1_10_Cost + this.totalA2_6_Cost + this.totalA2_10_Cost + this.totalA3_6_Cost + this.totalA3_10_Cost;
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

  getCount(packOf:any, productSize:any) {
    if(this.cart.items[productSize].length > 0) {
      let count = this.cart.items[productSize].filter((x:any) => x["packOf"] == packOf).length;
      return count
    } else {
      return 0
    }
  }

}
