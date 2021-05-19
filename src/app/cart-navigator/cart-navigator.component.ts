import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-navigator',
  templateUrl: './cart-navigator.component.html',
  styleUrls: ['./cart-navigator.component.css']
})
export class CartNavigatorComponent implements OnInit {

  constructor() { }

  @Input() cart: any;
  @Output() cartNavigateUsed = new EventEmitter<object>();

  ngOnInit(): void {
  }

  switchProcess(event:any) {
    console.log(event);
  }

  moveToClickedStage(cartUpdate:any) {
    console.log(event);
    this.cartNavigateUsed.emit(cartUpdate);
  }

  getImageURI(cartStage:any) {
    let currentStage = this.cart.cartStage.currentStage;
    let cartProgress = this.cart.cartStage.cartProgress;
    let stages = ["cart", "message", "boxArrangement", "shipping", "checkout"]
    if(cartStage == currentStage) {
      return "../assets/" + stages[cartStage] + "Ongoing.svg"
    } else if (cartStage < cartProgress) {
      return "../assets/processDone.svg"
    } else {
      return "../assets/" + stages[cartStage] + "Pending.svg"
    }
  }
}
