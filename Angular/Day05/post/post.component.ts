import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  isHidden:boolean=true;
  id:string='';
  title:string='';
  body:string='';

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetAllRecord()
  }

  GetAllRecord(){
      this.service.getRecord()
      .subscribe((response:any)=>{
        // console.log(response);

        this.posts=response;


      })
  }

  onSend(mytitle:any,mybody:any){

    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.postRecord(obj)
    .subscribe((response)=>{
      console.log(response);
    })



  }



  onEdit(item:any){
    // console.log(item);
    this.isHidden=false;
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
  }

  onUpdate(){
    let obj={
        id:this.id,
        title:this.title,
        body:this.body
    }

    this.service.updateRecord(obj)
    .subscribe((resposne)=>{
      console.log(resposne);
    })

  }

  onDelete(id:any){
      this.service.deleteRecord(id)
      .subscribe((response)=>{
        console.log(response);
      })
  }


}
