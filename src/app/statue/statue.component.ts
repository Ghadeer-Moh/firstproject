import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statue',
  templateUrl: './statue.component.html',
  styleUrls: ['./statue.component.css']
})
export class StatueComponent implements OnInit{
  constructor() {
  }
  ngOnInit() {
  }
@Input() Inputdata:any;

}











