import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { generate } from 'shortid';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
      this.cart.orderID = generate(); //uuidv4();

      // window.onbeforeunload = this.closing;


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

  allItemsConfigured:any = {
    "A1":false,
    "A2":false,
    "A3":false,
    "all":true
  };



  closing() {
    // this.canDeactivate();

    // window.onload = function() {
    //     window.addEventListener("onbeforeunload", function (e:any) {
    //         var confirmationMessage = 'It looks like you have been editing something. '
    //                                 + 'If you leave before saving, your changes will be lost.';
    //
    //         (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    //         return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    //     });
    // };

   }


  addItem(valueIs:any) {
    this.selectedBtn=valueIs;
    if(valueIs == "mangoesForYou") {
      this.allItemsConfigured.all = false;
    }else {
      this.allItemsConfigured.all = true
    }
  }

  updateCart(cartUpdate:any) {
    if(parseInt(cartUpdate.countUpdate) > 0) {
      let newItem = Object.assign({},this.item);
      let newItemUID = uuidv4(); //uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      // let newItemUID = generate();
      newItem.productType = cartUpdate.productType;
      newItem.productSize = cartUpdate.productSize;
      newItem.itemID = newItemUID;
      this.cart.items[cartUpdate.productSize].push(newItem);
    } else {
      this.cart.items[cartUpdate.productSize].pop();
    }
    if((this.cart.items["A1"].length > 0) || (this.cart.items["A2"].length > 0) || (this.cart.items["A3"].length > 0)) {
      this.allItemsConfigured.all = true;
    } else {
      this.allItemsConfigured.all = false;
    }
  }

  updateCartStage(submitUpdate:any) {
    console.log("Update cart stage: ",submitUpdate);
    this.cart.cartStage.currentStage = parseInt(this.cart.cartStage.currentStage) + 1;
    if(this.cart.cartStage.currentStage == 4 || this.cart.cartStage.currentStage == 5) {
      this.allItemsConfigured.all = true;
    }else{
      this.allItemsConfigured.all = false;
    }
  }

  updateBoxConfig(update:any) {
    this.cart.items[update.productSize][update.indexOfItem].rxtx = update.checkoutVal;
    // console.log(this.cart);
    this.checkForCompletion("rxtx");
  }

  updateArrangementStage(cart: any){
    console.log("Updating cart stage: ", cart, this.cart);
    this.cart = cart;
    this.allItemsConfigured.all = true;
  }

  updateShippingStage(cart: any){
    console.log("Updating shipping stage: ", cart, this.cart);
    this.cart = cart;
    this.checkForCompletion("shippingDetails");
  }

  updateCheckoutStage(cart: any){
    console.log("Updating Checkout stage: ", cart, this.cart);
    this.cart = cart;
  }

  checkForCompletion(attribute:any) {
    let sizes = Object.keys(this.cart.items);

    sizes.forEach((size:string) => {

      if(this.cart.items[size].length > 0){

        for(let element of this.cart.items[size]) {
          if(element[attribute].isComplete == true) {
            this.allItemsConfigured[size] = true
          } else if(element[attribute].isComplete == false) {
            this.allItemsConfigured[size] = false;
            break;
          }
        }
      } else {
        this.allItemsConfigured[size] = true;
      }

    });

    this.allItemsConfigured["all"] = this.allItemsConfigured["A1"] * this.allItemsConfigured["A2"] * this.allItemsConfigured["A3"];
  }
}
