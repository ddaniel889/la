import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  public total = [
    {
    id:'0',
    title : 'Defensa Legal en Caso de Discriminación Laboral',
    number:'Audiencia en el Tribunal de Familia',
    update:3,
    date : 30,
    percent:25
   },
   {
    id:'0',
    title : 'Defensa Legal en Caso de Discriminación Laboral',
    number:'Audiencia en el Tribunal de Familia',
    update:3,
    date : 30,
    percent:25
   },
   {
    id:'0',
    title : 'Defensa Legal en Caso de Discriminación Laboral',
    number:'Audiencia en el Tribunal de Familia',
    update:3,
    date : 30,
    percent:25
   },
   {
    id:'0',
    title : 'Defensa Legal en Caso de Discriminación Laboral',
    number:'Audiencia en el Tribunal de Familia',
    update:3,
    date : 30,
    percent:25
   },
   {
    id:'0',
    title : 'Defensa Legal en Caso de Discriminación Laboral',
    number:'Audiencia en el Tribunal de Familia',
    update:3,
    date : 30,
    percent:25
   }

   ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addCases() {
    this.router.navigate(['new-case']);
  }

}
