import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-description-slider-left',
  templateUrl: './description-slider-left.component.html',
  styleUrls: ['./description-slider-left.component.css']
})

export class DescriptionSliderLeftComponent implements OnInit {

  constructor() { }

  selectedTab: any = "covidBox";

  ngOnInit(): void {
    this.newItemEvent.emit('selectedBtn');
  }

  @Output() newItemEvent = new EventEmitter<string>();

  switchProduct(event:any) {
    this.newItemEvent.emit(event.target.dataset.btn);
    this.selectedTab = event.target.dataset.btn;
  }
}
