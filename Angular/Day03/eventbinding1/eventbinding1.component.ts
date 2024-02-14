import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  count:number=0;
  name!:string; 

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    
    if(this.count==0){
      console.log("Click Event Occur...");
      this.count++;
    }
    
  }

  onImage(){
    console.log("Click Event Apply...")
  }

  onDollerEvent(myevent:any){
    console.log(myevent);
    console.log(myevent.target.value);
  }

  onSend(myevent:any){
    console.log(myevent);
    console.log(myevent.value);
    myevent.style.background='green';
    myevent.style.color='white';
  }

  onSend1(myvalue:string){
    console.log(myvalue);
  }

  onChange(){
    console.log("Change Event occur..");
  }

  onKeyup(){
    console.log("on Key Up Event Occur...")
  }

  onKeyDown(){
    console.log("on Key Down Event Occur...")
  }

}
