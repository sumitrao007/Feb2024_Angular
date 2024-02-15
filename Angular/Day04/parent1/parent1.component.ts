import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  strMsg:string='Data Send From Parent to Child....';

  jsonObj={
    id:9,
    fname:'Sumit',
    status:'Active'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
