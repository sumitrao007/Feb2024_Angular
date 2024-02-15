import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent implements OnInit {

  choice:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onSend(mycolor:string){
    this.choice=mycolor.toLowerCase().trim();
  }

}
