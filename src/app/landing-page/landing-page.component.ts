import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  showDetail:any={
    header:'',
    text:{
      a:'',
      b:'',
      c:''
    }
  }

  mangoes:any={
    header:'Pack of 6',
    text:{
      a:'Devgad Alphonso Mangoes',
      b:'',
      c:''
    }
  }
  covidTools:any={
    header:'Covid care kit',
    text:{
      a:'Face Shield',
      b:'Mask and Gloves',
      c:'Sanitizer'
    }
  }
  PMCaresFund:any={
    header:'PM cares fund',
    text:{
      a:'Rs 100/- donation per order',
      b:'',
      c:''
    }
  }

  ngOnInit(): void {
    this.showDetail=this.mangoes;
  }

  switchDetail(event:any) {
    this.changeDetail(event.target.dataset.btn);
  }

  changeDetail(btnType:any){
    if(btnType=='mangoes'){
      this.showDetail=this.mangoes;
      console.log("in mangoes");
    } else if(btnType=='covidTools'){
      this.showDetail=this.covidTools;
      console.log("in covidTools");
    } else if(btnType=='PMCaresFund'){
      this.showDetail=this.PMCaresFund;
      console.log("in PMCaresFund");
    }
  }
}
