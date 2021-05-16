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
  @Input() priceList: any;

  cartCost: any = {
    A1:0,
    A2:0,
    A3:0,
    total:0
  }
  orderText: any;

  ngOnInit(): void {
  }

  buildOrder() {
    let dummy = String.fromCharCode(10);
    this.orderText = `
Order ID:
*${this.cart.orderID}*
    `;

    // let cartCost = {
    //   A1:0,
    //   A2:0,
    //   A3:0,
    //   total:0
    // };

    Object.keys(this.cart.items).map((size:any) => {
      if(this.cart.items[size].length > 0) {
        let unitPrice = this.priceList.COVIDBox[size];
        this.cartCost[size] = unitPrice * this.cart.items[size].length;
        this.cartCost['total'] += this.cartCost[size]
        this.orderText +=`
--------------
COVID WARRIOR KIT
Size: ${size}
Qty: ${this.cart.items[size].length}
Unit Price: Rs ${unitPrice}/-
Total: *Rs ${this.cartCost[size]}*${dummy}
Box(s):-
        `

        this.cart.items[size].map((item:any, index:any) => {
          this.orderText += `
${index+1})*To:* ${item.rxtx.to}
    *Personal Note:* ${item.rxtx.message}
    *From:* ${item.rxtx.from}
    *Box Arrangment:* ${item.boxArrangement}
    *Address:* ${item.shippingDetails.address_line_1}, ${item.shippingDetails.address_line_2}, ${item.shippingDetails.city}
    *Pincode:* ${item.shippingDetails.pincode}
    *Nearest Landmark:* ${item.shippingDetails.landmark}
    *Recipient Contact:* ${item.shippingDetails.recipientContact}${dummy}
        `
        })
        this.orderText +=`
--------------
`
      }
    })

    this.orderText += `

______________

Grand Total: Rs *${this.cartCost.total}*/-
______________
    `;

    // this.cart.items.A1.map((item:any) => {
    //   let dummy = String.fromCharCode(10);
    //   this.orderText += `
    //   A1 Size Alphonso ${item.productType}
    //   *To:* ${item.rxtx.to}'s* ${item.productType}
    //   *Personal Note:* ${item.rxtx.message}
    //   *From:* ${item.rxtx.from}
    //   *Size:* ${item.productSize}
    //   *Box Arrangment:* ${item.boxArrangement}
    //   *Address:* ${item.shippingDetails.apartment}, ${item.shippingDetails.location}
    //   *Pincode:* ${item.shippingDetails.pincode}
    //   *Nearest Landmark:* ${item.shippingDetails.landmark}
    //   *Cost:* ${item.productCost}
    // `
    // })

    // this.orderText +=`
    // --------------
    // COVID WARRIOR KIT
    // Size: A1
    // Qty: ${this.cart.items.A1.length}
    // Unit Price: Rs 499/-
    // Total: *Rs ${499*this.cart.items.A1.length}*
    // --------------
    // `
    console.log(this.orderText);

    let res = encodeURI(this.orderText);

    //send on whatsapp
    var win = window.open(`https://wa.me/${+918050027648}?text=${res}`, '_blank');

  }

}
