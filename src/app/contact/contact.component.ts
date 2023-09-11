import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements  OnInit{
  constructor() {
  }
 ngOnInit() {
 }
  headername="Contact"
  statusdata=[{
    user:"ghadeer" ,
    data:'3/5/1999 10:30 AM',
    desc:'The Ticket 1234 is opened',
    borderclass:'border-primary',
    color:'red'
  },
    {
      user:"mohammed" ,
      data:'12/4/2022 8:30 AM',
      desc:'The Ticket 5678 is opened',
      borderclass:'border-primary',
      color:'blue'
    },{
      user:"Ali" ,
      data:'12/4/2022 8:30 AM',
      desc:'The Ticket 9101 is opened',
      borderclass:'border-primary',
      color:'orange'
    },{
      user:"Ahmed" ,
      data:'12/4/2022 8:30 AM',
      desc:'The Ticket 2345 is opened',
      borderclass:'border-primary',
      color:'darkred'
    },{
      user:"ahmed" ,
      data:'12/4/2022 8:30 AM',
      desc:'The Ticket 6789 is opened',
      borderclass:'border-primary',
      color:'yellow'
    },

  ]

}


















