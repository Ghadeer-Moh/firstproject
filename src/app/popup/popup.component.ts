import {Component, NgModule, OnInit } from '@angular/core';
import {MasterService} from "../service/master.service";


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent  implements OnInit{
  closeResult ='';
  constructor(private  service: MasterService) {
  }
  ngOnInit() {
  }


// savedata(name:string){
//     this.service.saveData(name);
// }
}

