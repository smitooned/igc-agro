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
    this.cart.orderID = uuidv4(); //uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
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
      currentStage: -1,
      productSelected: false,
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
    productCost:'',
    size: '',
    rxtx: {
      to: null,
      message: null,
      from: null,
      isValid:null,
      isComplete:false
    },
    boxArrangement:'Raw',
    shippingDetails: {
      region: '',
      nearestCentre: '',
      address_line_1: '',
      address_line_2: '',
      city:"", // address city
      pincode: '',
      landmark: '',
      recipientContact:'',
      isValid: null,
      isComplete: false
    }
  }

  priceList: any = {
    COVIDBox: {
      A1: 499,
      A2: 599,
      A3: 699
    },
    devgadAlphonso: {
      A1: 499,
      A2: 599,
      A3: 699
    }
  }

  addItem(valueIs:any) {
    this.selectedBtn=valueIs;
  }

  updateCart(cartUpdate:any) {
    if(parseInt(cartUpdate.countUpdate) > 0) {
      let newItem = Object.assign({},this.item);
      let newItemUID = uuidv4(); //uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      newItem.productType = cartUpdate.productType;
      newItem.productSize = cartUpdate.productSize;
      newItem.itemID = newItemUID;
      this.cart.items[cartUpdate.productSize].push(newItem);
    } else {
      this.cart.items[cartUpdate.productSize].pop();
    }
  }

  updateCartStage(submitUpdate:any) {
    console.log("Update cart stage: ",submitUpdate);
    this.cart.cartStage.currentStage = parseInt(this.cart.cartStage.currentStage) + 1;
  }

  updateBoxConfig(update:any) {
    this.cart.items[update.productSize][update.indexOfItem].rxtx = update.checkoutVal;
    console.log(this.cart);
  }

  updateArrangementStage(cart: any){
    console.log("Updating cart stage: ", cart, this.cart);
    this.cart = cart;

  }

  updateShippingStage(cart: any){
    console.log("Updating shipping stage: ", cart, this.cart);
    this.cart = cart;
  }

  updateCheckoutStage(cart: any){
    console.log("Updating Checkout stage: ", cart, this.cart);
    this.cart = cart;
  }

}
