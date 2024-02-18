import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl:string='https://jsonplaceholder.typicode.com/posts';


  constructor(private http:HttpClient) { }

  getRecord(){
   return (this.http.get(this.baseurl));
  }

  postRecord(obj:any){
    return (this.http.post(this.baseurl,obj));
  }

  updateRecord(obj:any){
     //return (this.http.put(this.baseurl+"/"+obj.id,obj));
     return (this.http.put(`${this.baseurl}/${obj.id}`,obj));
  }

  deleteRecord(id:any){
     return (this.http.delete(`${this.baseurl}/${id}`));
  }


}
