import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  constructor() { }
  details:any={header:'',imgsrc:''};

  ngOnInit(): void {

    this.details.imgsrc="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80";
    this.details.header='Gift amango box to your loved ones this summer';

  }
  switchProduct(event:any) {
      console.log("trying to switch product");
  }
}
