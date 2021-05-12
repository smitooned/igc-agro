import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  @Input() btnType: any;


  details:any={
    header:'',
    imgsrc:'',
    description:{
      header:'',
      first:{},
      second:{},
      third:{}
    }
  };

  covidBox:any= {
      header:'Gift a mango box to your loved ones this summer',
      imgsrc:'https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
      description:{
        header:'Box includes :',
        first:'6 Alphonso Mangoes',
        second:{
          a:'Face Shield',
          b:'Mask',
          c:'Sanitizer'
        },
        third:'100rs donated to PM cares fund'
      }
  };
    mangoesForYou:any= {
      header:'Devgad Alphonso MAngoes',
      imgsrc:'',
      description:{
        header:'Available in 3 sizes :',
        first:'A1',
        second:{
          a:'',
          b:'',
          c:''
        },
        third:''
      }
  };
    bulkOrder:any= {
      header:'',
      imgsrc:'',
      description:{
        header:'',
        first:'',
        second:{
          a:'',
          b:'',
          c:''
        },
        third:''
      }
  };

  ngOnInit(): void {
    this.details.header='Get awesome Mangoes which you will love';
    this.details.imgsrc="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80";
    this.details.description.header='Box includes :';
    this.details.description.first='6 Alphonso Mangoes';
    this.details.description.second.a='Face Shiled';
    this.details.description.second.b='Sanitizer';
    this.details.description.second.c='Mask';
    this.details.description.third='100rs donated to PM cares fund';
  }

  ngOnChanges(changes: any) {
    // changes.prop contains the old and the new value...
    console.log(changes.btnType);
    this.changeView(this.btnType);
  }

  changeView(btnType:any){
    if(btnType=='covidBox'){
      this.details=this.covidBox;
    }else if(btnType=='mangoesForYou'){
      this.details=this.mangoesForYou;
    }
  }
}
