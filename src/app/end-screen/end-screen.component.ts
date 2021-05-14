import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.css']
})
export class EndScreenComponent implements OnInit {

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
        *Personal Note:* ${item.rxtx.message}${dummy}
        *From:* ${item.rxtx.from}${dummy}
        *Size:* ${item.productSize}${dummy}
        *Box Arrangment:* ${item.boxArrangement}${dummy}
        *Address:* ${item.shippingDetails.apartment}, ${item.shippingDetails.location}${dummy}
        *Pincode:* ${item.shippingDetails.pincode}${dummy}
        *Nearest Landmark:* ${item.shippingDetails.landmark}${dummy}
        *Cost:* ${item.productCost}
    `
    })
    console.log(this.orderText);

    let res = encodeURI(this.orderText);

    //send on whatsapp
    var win = window.open(`https://wa.me/${+918050027648}?text=${res}`, '_blank');

  }

}
