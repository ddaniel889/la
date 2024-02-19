import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public vacancies = [
    {
    id:'0',
    name : 'Raquel Ortiz',
    location:'Audiencia en el Tribunal de Familia',
    date:'Martes, 6 de Septiembre 2023',
    image : '',
    type : 'virtual',
    time:'10:00 AM - 11:00 AM '
   },
   {
    id:'0',
    name : 'Raquel Ortiz',
    location:'Audiencia en el Tribunal de Familia',
    date:'Martes, 6 de Septiembre 2023',
    image : '',
    type : 'virtual',
    time:'10:00 AM - 11:00 AM '
   },
   {
    id:'0',
    name : 'Raquel Ortiz',
    location:'Audiencia en el Tribunal de Familia',
    date:'Martes, 6 de Septiembre 2023',
    image : '',
    type : 'virtual',
    time:'10:00 AM - 11:00 AM '
   },
   {
    id:'0',
    name : 'Raquel Ortiz',
    location:'Audiencia en el Tribunal de Familia',
    date:'Martes, 6 de Septiembre 2023',
    image : '',
    type : 'virtual',
    time:'10:00 AM - 11:00 AM '
   },

   ];

  constructor() { }

  ngOnInit(): void {
  }

}
