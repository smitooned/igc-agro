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
      a:'Two N95 Masks',
      b:'Hand Sanitizer (100ml)',
      c:'One No-Touch COVID Key'
    }
  }
  PMCaresFund:any={
    header:'Donation',
    text:{
      a:'Rs 99/- donation per order',
      b:'',
      c:''
    }
  }
  queryText: any = ""

  ngOnInit(): void {
    this.showDetail=this.mangoes;
    // window.setInterval(changeDetail);
  }

  switchDetail(event:any) {
    this.changeDetail(event.target.dataset.btn);
  }
  changeDetail(btnType:any){
    if(btnType=='mangoes'){
      this.showDetail=this.mangoes;
      // console.log("in mangoes");
    } else if(btnType=='covidTools'){
      this.showDetail=this.covidTools;
      // console.log("in covidTools");
    } else if(btnType=='PMCaresFund'){
      this.showDetail=this.PMCaresFund;
      // console.log("in PMCaresFund");
    }
  }

  routingBtn(event:any){
    localStorage.setItem('selectedBtn',event.target.id);
  }

  whatsappMeForQuery() {

      this.queryText = `Hey, Can you please help me?`;
      let res = encodeURI(this.queryText);
      var win = window.open(`https://wa.me/${+919142902999}?text=${res}`, '_blank');
  }
}
