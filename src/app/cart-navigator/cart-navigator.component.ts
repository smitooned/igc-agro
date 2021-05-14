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

  ngOnInit(): void {
  }

  switchProcess(event:any) {
    console.log(event);
  }
}
