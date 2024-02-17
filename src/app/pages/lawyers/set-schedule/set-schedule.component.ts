import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-schedule',
  templateUrl: './set-schedule.component.html',
  styleUrls: ['./set-schedule.component.scss']
})
export class SetScheduleComponent implements OnInit {

  public appoinment = [{
    date : 'Septiembre 17 del 2023',
    time:'10:00 AM - 11:00 AM ',
    type : 'Presencial',
    person : 'Raquel Ortiz',
   },
   {
    date : 'Septiembre 17 del 2023',
    time:'10:00 AM - 11:00 AM ',
    type : 'Presencial',
    person : 'Raquel Ortiz',
   },
   {
    date : 'Septiembre 17 del 2023',
    time:'10:00 AM - 11:00 AM ',
    type : 'Presencial',
    person : 'Raquel Ortiz',
   },

   ];

  constructor() { }

  ngOnInit(): void {
  }

}
