import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Core java",'Adavnced java','HTML,Css,Js','Angular 12','AWS','Docker','Jenkings'];

  arrprod=[
    {
      
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
