import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-configure-boxes',
  templateUrl: './configure-boxes.component.html',
  styleUrls: ['./configure-boxes.component.css']
})
export class ConfigureBoxesComponent implements OnInit {

  constructor() { }

  @Input() cart: any;
  @Output() boxConfigUpdatedByChild = new EventEmitter<object>();

  ngOnInit(): void {
  }

  handleBoxConfigUpdate(event: any) {
    console.log(event);
    this.boxConfigUpdatedByChild.emit(event);
  }

}
