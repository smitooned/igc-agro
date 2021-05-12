import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-navigator',
  templateUrl: './cart-navigator.component.html',
  styleUrls: ['./cart-navigator.component.css']
})
export class CartNavigatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  switchProcess(event:any) {
    console.log(event);
  }
}
