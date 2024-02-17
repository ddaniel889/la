import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  public users = [{
    name : 'Fabricio Mendez',
    matter:'Notificación de Audiencia',
    date : '2:23 pm',
   },
   {
    name : 'Camilo Guzman ',
    matter:'Citación para Jurado',
    date : '2:23 pm',
   },
   {
    name : 'Cristian Mejia',
    matter:'Aviso de Subpoena',
    date : '2:23 pm',
   },
   {
    name : 'Raquel Victoria',
    matter:'',
    date : '2:23 pm',
   },
   ];

   public messages = [{
    name : 'Fabricio Mendez',
    matter:'Notificación de Audiencia',
    date : '2:23 pm',
    message : 'Contenido del mensaje',
   },
   {
    name : 'Camilo Guzman ',
    matter:'Citación para Jurado',
    date : '2:23 pm',
    message : 'Contenido del mensaje',
   },
   {
    name : 'Cristian Mejia',
    matter:'Aviso de Subpoena',
    date : '2:23 pm',
    message : 'Contenido del mensaje',
   },
   {
    name : 'Raquel Victoria',
    matter:'',
    date : '2:23 pm',
    message : 'Contenido del mensaje',
   },
   ];

  constructor() { }

  ngOnInit(): void {
  }


}
