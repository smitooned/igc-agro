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
  selectedProductIndex: any = 0;


  constructor() { }

  ngOnInit(): void {
  }

  expandForm(selectedProductSize: any, selectedProductIndex: any){
    if(this.selectedProductSize == selectedProductSize && this.selectedProductIndex == selectedProductIndex){
      this.selectedProductIndex = 0;
      this.selectedProductSize = '';
    }else{
      this.selectedProductSize = selectedProductSize;
      this.selectedProductIndex = selectedProductIndex;
    }
  }

}
