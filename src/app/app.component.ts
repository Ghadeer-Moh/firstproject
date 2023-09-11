import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my First App ^-^';
  length =100;
  b = 50;

  GetData(data:any){
    console.log(data);
  }
  itemdisabled=false;
  color='red';
  fontsize='50px'
}
