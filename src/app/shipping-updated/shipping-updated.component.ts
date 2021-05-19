import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shipping-updated',
  templateUrl: './shipping-updated.component.html',
  styleUrls: ['./shipping-updated.component.css']
})
export class ShippingUpdatedComponent implements OnInit {

  @Input() cart: any;
  @Output() updateShippingStage = new EventEmitter<object>();

  isFormComplete: boolean = false;
  isSameBillingAddress: boolean = false;

  selectedProductSize: any = '';
  selectedProductIndex: any = -1;

  shippingDetails = {
    region: "",
    nearestCentre: "",
    address_line_1: "",
    address_line_2: "",
    city:"",
    pincode: "",
    landmark: "",
    recipientContact:"",
    isComplete:true
  }


  constructor(private modalService: NgbModal) { }
  closeResult = '';

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

  saveButtonAction(productSize: any, index: any, itemActual:any){
    // console.log("shipping details: ",this.shippingDetails);
    this.shippingDetails.isComplete = true;

    this.cart.items[productSize][index].shippingDetails = Object.assign({},this.shippingDetails);

    this.selectedProductSize = '';
    this.selectedProductIndex = -1;

    // form completion status update
    this.isFormComplete = true;

    this.shippingDetails = {
      region: "",
      nearestCentre: "",
      address_line_1: "",
      address_line_2: "",
      city:"",
      pincode: "",
      landmark: "",
      recipientContact:"",
      isComplete: false
    }
    this.handleBoxConfigUpdate(this.cart);
    //
    // if (this.isSameBillingAddress) {
    //
    // }
  }

  discardButtonAction(productSize: any, index: any){
    this.shippingDetails = Object.assign({},this.cart.items[productSize][index].shippingDetails);
  }

  handleBoxConfigUpdate(event: any) {
    console.log(event);
    this.updateShippingStage.emit(event);
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


}
