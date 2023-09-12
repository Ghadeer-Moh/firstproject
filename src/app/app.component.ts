import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my First App ^-^';
  classname='special';
  isspecial=true;
  inputvalue='test';
  country=['Yemen', 'Aden' , 'Egypt','Turkish']

  style={
    'font-style' : 'italic' ,
    'color' : 'blue'

}
  constructor()
  {

  }
  datachange(){
    console.log(this.inputvalue)
  }
  people :any[]=[
    {
      "name" :"Ghadeer Mohammed",
      "age": 25,
      "country" : "Yemen"
    },
    {
      "name" :"Ali Mohammed",
      "age": 44,
      "country" : "Aden"
    },
    {
      "name" :"Mohammed Mohammed",
      "age": 80,
      "country" : "Turkish"
    },
  ];






}
