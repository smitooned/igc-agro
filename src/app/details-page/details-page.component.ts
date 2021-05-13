import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  selectedBtn='';

  cart: any = {
    items: {
      A1: [],
      A2: [],
      A3: []
    },
    orderID: '',
    whatsappNumber: {
      number: '',
      isVerified: false
    },
    cartStage: {
      currentStage: 0,
      cartLoaded: false,
      boxesArranged: false,
      shippingConfigured: false,
      checkoutConfirmed: false,
      whatsappVerified: false
    }
  }

  item: any = {
    itemID: '',
    itemName: '',
    productType: '',
    size: '',
    rxtx: {
      to: '',
      message: '',
      from: ''
    },
    boxArrangement:'',
    shippingDetails: {
      region: '',
      nearestCentre: '',
      location: '',
      apartment: '',
      landmark: '',
      pincode: ''
    }
  }

  addItem(valueIs:any) {
    this.selectedBtn=valueIs;
  }

  updateCart(cartUpdate:any) {
    //console.log("event reached parent", cartUpdate);
    if(parseInt(cartUpdate.countUpdate) > 0) {
      let newItem = this.item;
      let newItemUID = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      newItem.productType = cartUpdate.productType;
      newItem.productSize = cartUpdate.productSize;
      newItem.itemID = newItemUID;
      this.cart.items[cartUpdate.productSize].push(newItem);
    } else {
      this.cart.items[cartUpdate.productSize].pop();
    }
  }

  updateCartStage(submitUpdate:any) {
    console.log(submitUpdate);
    this.cart.cartStage.currentStage = parseInt(submitUpdate.stageComplete) + 1;
  }

  updateBoxConfig(update:any) {
    this.cart.items[update.productSize][update.indexOfItem].rxtx = update.checkoutVal;
    console.log(this.cart);
  }

}
