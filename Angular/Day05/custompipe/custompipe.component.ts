import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strDetails:string='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum est perferendis delectus quibusdam non ex doloremque natus temporibus repudiandae eos iure fugit, placeat nihil deleniti officia praesentium, consectetur quas totam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum est perferendis delectus quibusdam non ex doloremque natus temporibus repudiandae eos iure fugit, placeat nihil deleniti officia praesentium, consectetur quas totam?';
  constructor() { }

  ngOnInit(): void {
  }

}
