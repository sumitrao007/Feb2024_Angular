import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent implements OnInit {

  strMsg:string='welcome to Angular module by sumit Raokhande'

  mydate=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
