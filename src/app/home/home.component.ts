import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(){

  }
  ngOnInit() {
  }
  title='Welcome to our app';
  Amount = 20653.45;
  currentdate = new Date();
  perecentdata = 0.987;
  jsonobject ={"name": "ghadeer"};
  sgdrate= 55.85;

}
