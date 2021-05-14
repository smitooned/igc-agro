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
    Order ID: *${this.cart.orderID}*

    `;
    this.cart.items.A1.map((item:any) => {

      let dummy = String.fromCharCode(10);

      this.orderText += `
        *${item.rxtx.to}'s* ${item.productType}${dummy}
        Personal Note: ${item.rxtx.message}${dummy}
        From: ${item.rxtx.from}${dummy}
        ${item.shippingDetails.apartment}, ${item.shippingDetails.location}${dummy}
        Pincode: ${item.shippingDetails.pincode}${dummy}
        Nearest Landmark: ${item.shippingDetails.landmark}${dummy}
        Box Arrangment: ${item.boxArrangement}${dummy}
        Price: Rs 499/-
    `
    })
    console.log(this.orderText);

    let res = encodeURI(this.orderText);

    //send on whatsapp
    var win = window.open(`https://wa.me/${+918050027648}?text=${res}`, '_blank');
  }
}

//var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${msg}`, '_blank');
