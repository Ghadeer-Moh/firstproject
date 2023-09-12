import {Component, NgModule, OnInit } from '@angular/core';
import {MasterService} from "../service/master.service";
//import { ModalDimismissReasons } from '@ang-bootstrap/ng-bootstap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent  implements OnInit{
  closeResult ='';
  constructor( private  modalService : NgModule , private  service: MasterService) {
  }
  ngOnInit() {
  }
  open(content:any){
    this.modalService.open(content , {arialLabelledBy:'modal-basic-title'}).result.then(result) =>{
      this.closeResult='Closed with : $(result)';
    }, (reason) =>{
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }
private getDismissReason(reason: any): string{
  if (reason === ModalDimissReasons.ESC){
    return  'by pressing ESC';
} else if (reason === ModalDimissReasons.BACKDROP_CLICK){
    return 'by clicking an a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
savedata(name:string){
    this.service.saveData(name);

}
}

