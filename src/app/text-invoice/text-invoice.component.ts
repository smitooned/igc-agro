import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-invoice',
  templateUrl: './text-invoice.component.html',
  styleUrls: ['./text-invoice.component.css']
})
export class TextInvoiceComponent implements OnInit {

  constructor() { }
  @Input() cart: any;
  
  ngOnInit(): void {
  }

}
