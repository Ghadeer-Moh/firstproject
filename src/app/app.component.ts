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



  constructor( private service:MasterService)
  {
    this.userlist = this.service.GetUserData();

    this.service.GetUserDetails().subscribe(result=>{
      this.emplist = result;
      console.log(this.emplist);
    });

  }






}
