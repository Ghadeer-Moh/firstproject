import { Component } from '@angular/core';
import {MasterService} from "./service/master.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootapp';
  userlist:any;
  emplist:any;
//   classname='special';
//   isspecial=true;
//   inputvalue='test';
//   country=['Yemen', 'Aden' , 'Egypt','Turkish']
//
//   style={
//     'font-style' : 'italic' ,
//     'color' : 'blue'
//
// }
  constructor( private service:MasterService)
  {
    this.userlist = this.service.GetUserData();
    // console.log(this.userlist);

    this.service.GetUserDetails().subscribe(result=>{
      this.emplist = result;
      console.log(this.emplist);
    });

  }
  // datachange(){
  //   console.log(this.inputvalue)
  // }
  // people :any[]=[
  //   {
  //     "name" :"Ghadeer Mohammed",
  //     "age": 25,
  //     "country" : "Yemen"
  //   },
  //   {
  //     "name" :"Ali Mohammed",
  //     "age": 44,
  //     "country" : "Aden"
  //   },
  //   {
  //     "name" :"Mohammed Mohammed",
  //     "age": 80,
  //     "country" : "Turkish"
  //   },
  // ];






}
