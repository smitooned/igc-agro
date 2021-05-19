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

  totalA1_10_Cost: any = 0;
  totalA2_6_Cost: any = 0;
  totalA2_10_Cost: any = 0;
  totalA3_6_Cost: any = 0;
  totalA3_10_Cost: any = 0;
  amountDonated: any = 0;
  totalCost: any = 0;

  orderText: any;

  ngOnInit(): void {
  }

  buildOrder() {

    this.totalA1_10_Cost = this.priceList['COVIDWarriorKit']['A1_10'] * this.cart.items["A1"].length;

    this.totalA2_6_Cost = (this.priceList['COVIDWarriorKit']['A2_6'] * this.getCount('6', "A2"));
    this.totalA2_10_Cost = (this.priceList['COVIDWarriorKit']['A2_10'] * this.getCount('10', "A2"));

    this.totalA3_6_Cost = (this.priceList['COVIDWarriorKit']['A3_6'] * this.getCount('6', "A3"));
    this.totalA3_10_Cost = (this.priceList['COVIDWarriorKit']['A3_10'] * this.getCount('10', "A3"));

    this.amountDonated = 99 * (this.cart.items["A1"].length + this.cart.items["A2"].length + this.cart.items["A3"].length);

    this.totalCost = this.totalA1_10_Cost + this.totalA2_6_Cost + this.totalA2_10_Cost + this.totalA3_6_Cost + this.totalA3_10_Cost;

    this.cartCost = {
      A1: this.totalA1_10_Cost,
      A2: this.totalA2_6_Cost + this.totalA2_10_Cost,
      A3: this.totalA3_6_Cost + this.totalA3_10_Cost,
      total: this.totalCost
    }

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
        // let unitPrice = this.priceList.COVIDWarriorKit[size + "_" + ];
        // this.cartCost[size] = unitPrice * this.cart.items[size].length;
        // this.cartCost['total'] += this.cartCost[size]
        this.orderText +=`
--------------
COVID WARRIOR KIT
Size: ${size}
Qty: ${this.getQuantity(size)}
Unit Price: ${this.getUnitPrice(size)}
Total: *Rs ${this.cartCost[size]}*${dummy}
Box(s):-
        `

        this.cart.items[size].map((item:any, index:any) => {
          this.orderText += `
${index+1})*To:* ${item.rxtx.to}
    *Personal Note:* ${item.rxtx.message}
    *From:* ${item.rxtx.from}
    *Box Arrangment:* ${item.boxArrangement}
    *Box Selected:* Pack of ${item.packOf}
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

  getQuantity(productSize:any) {
    if(productSize == "A1") {
      return `
        Pack of 10: ${this.getCount("10","A1")}
      `
    } else {
      return `
      Pack of 6: ${this.getCount("6", productSize)}
      Pack of 10: ${this.getCount("10", productSize)}
      `
    }
  }

  getUnitPrice(productSize:any) {
    if(productSize == "A1") {
      return `
        Pack of 10: ${this.priceList["COVIDWarriorKit"]["A1_10"]}
      `
    } else {
      return `
      Pack of 6: ${this.priceList["COVIDWarriorKit"][productSize+"_6"]}
      Pack of 10: ${this.priceList["COVIDWarriorKit"][productSize+"_10"]}
      `
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
