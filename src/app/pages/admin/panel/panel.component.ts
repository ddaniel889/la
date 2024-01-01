import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public subs = [{
    name : 'Suscripción Premium',
    number : '#2345',
    date : 'Septiembre 23 202',
    amount : '$000'
   },
   {
    name : 'Suscripción Premium',
    number : '#2345',
    date : 'Septiembre 23 202',
    amount : '$000'
   },
   {
    name : 'Suscripción Premium',
    number : '#2345',
    date : 'Septiembre 23 202',
    amount : '$000'
   },
   {
    name : 'Suscripción Premium',
    number : '#2345',
    date : 'Septiembre 23 202',
    amount : '$000'
   },

   ];

  constructor() { }

  ngOnInit(): void {
  }

}
