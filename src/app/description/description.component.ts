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
      header:'',
      imgsrc:'../assets/covidWarriorKit.jpeg',
      description:{
        header:'Box includes :',
        first:'6 Alphonso Mangoes',
        second:{
          a:'2 N95 Masks',
          b:'Sanitizer',
          c:'No touch Covid key'
        },
        third:'Rs 99/- donated to Maansuki foundation',
        isAvailable: true
      }
  };
    mangoesForYou:any= {
      header:'Coming Soon...',
      imgsrc:'../assets/mango_coming_soon.gif',
      description:{
        header:'',
        first:'',
        second:{
          a:'',
          b:'',
          c:''
        },
        third:'',
        isAvailable: false
      }
  };
    bulkOrder:any= {
      header:'Coing Soon...',
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
    this.details=this.covidBox;
  }

  ngOnChanges(changes: any) {
    // changes.prop contains the old and the new value...
    // console.log(changes.btnType);
    this.changeView(this.btnType);
  }

  changeView(btnType:any){
    if(btnType=='covidBox'){
      this.details=this.covidBox;
    }else if(btnType=='mangoesForYou'){
      this.details=this.mangoesForYou;
    }else if(btnType=='bulkOrder'){
      this.details=this.bulkOrder;
    }
  }
}
