import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor( private http:HttpClient) { }
  userinfo =[{"Name" : "Ghadeer" , "Mark": 200},{"Name" : "Ahmed" , "Mark": 300},{"Name" : "Mohammed" , "Mark": 500}]
  apiurl="https://jsonplaceholder.typicode.com/users";
  GetUserData(){
    return this.userinfo;
  }


  GetUserDetails(){
    return this.http.get(this.apiurl);

  }
  GetEmpData(){
    return this.http.get(this.apiurl);
  }
  // saveData(){
  //   this.userobject={"Name" : name , "Mark": 100}
  //   this.userinfo.push(this.userobject);
  //   console.log(this.userinfo)
  //
  // }
}


