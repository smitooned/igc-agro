import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  selectedBtn='';

  addItem(valueIs:any) {
    this.selectedBtn=valueIs;
  }


}
