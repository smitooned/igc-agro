import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  @Input() cart: any;
  @Output() updateShippingStage = new EventEmitter<object>();

  selectedProductSize: any = '';
  selectedProductIndex: any = -1;

  shippingDetails = {
    apartment: "",
    landmark: "",
    location: "",
    nearestCentre: "",
    pincode: "",
    region: ""
  }


  constructor() { }

  ngOnInit(): void {
  }

  expandForm(selectedProductSize: any, selectedProductIndex: any){
    if(this.selectedProductSize == selectedProductSize && this.selectedProductIndex == selectedProductIndex){
      this.selectedProductIndex = 0;
      this.selectedProductSize = '';

      this.cart.items[selectedProductSize][selectedProductIndex].shippingDetails = Object.assign({},this.shippingDetails);
    }else{
      this.selectedProductSize = selectedProductSize;
      this.selectedProductIndex = selectedProductIndex;

      this.shippingDetails = Object.assign({},this.cart.items[selectedProductSize][selectedProductIndex].shippingDetails);
    }
  }

  saveButtonAction(productSize: any, index: any){
    console.log("shipping details: ",this.shippingDetails);
    this.cart.items[productSize][index].shippingDetails = Object.assign({},this.shippingDetails);

    this.selectedProductSize = '';
      this.selectedProductIndex = -1;

    this.shippingDetails = {
      apartment: "",
      landmark: "",
      location: "",
      nearestCentre: "",
      pincode: "",
      region: ""
    }
    
    this.handleBoxConfigUpdate(this.cart);
  }

  discardButtonAction(productSize: any, index: any){
    this.shippingDetails = Object.assign({},this.cart.items[productSize][index].shippingDetails);
  }

  handleBoxConfigUpdate(event: any) {
    console.log(event);
    this.updateShippingStage.emit(event);
  }

}
