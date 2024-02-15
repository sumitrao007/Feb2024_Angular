import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childStrEvent=new EventEmitter();
  strMsg:string="Data send from child to parent....";
  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.childStrEvent.emit(this.strMsg);
  }

}
