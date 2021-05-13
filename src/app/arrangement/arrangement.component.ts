import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arrangement',
  templateUrl: './arrangement.component.html',
  styleUrls: ['./arrangement.component.css']
})
export class ArrangementComponent implements OnInit {

  constructor() { }

  @Input() cart: any;
  @Output() updateArrangementStage = new EventEmitter<object>();

  ngOnInit(): void {
    console.log("Cart: ", this.cart);
  }

  handleBoxConfigUpdate(event: any) {
    console.log(event);
    this.updateArrangementStage.emit(event);
  }

  changeType(type: any, productSize: any,index: any) {
    localStorage.setItem('test',type);
    console.log("Change type: ", type, productSize, index);

    console.log(this.cart.items[productSize][index]);
    this.cart.items[productSize][index].boxArrangement = type;

    this.handleBoxConfigUpdate(this.cart);

    console.log("Cart: ",this.cart)
  }

}
