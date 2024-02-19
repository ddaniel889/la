import { Component, OnInit } from '@angular/core';
import {  VacanciesAvalaibleComponent} from '../vacancies-avalaible/vacancies-avalaible.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  public vacancies = [
    {
    id:'0',
    name : 'Raquel Ortiz',
    location:'Bogotá, Colombia ',
    image : '',
    job : 'Especialidad',
    job1 : 'Especialidad',
    description: 'Reclamación por Despido Injusto y Discriminación en XYZ Corporación',
    time:2
   },
   {
    id:'1',
    name : 'Raquel Ortiz',
    location:'Bogotá, Colombia ',
    image : '',
    job : 'Especialidad',
    job1 : 'Especialidad',
    description: 'Reclamación por Despido Injusto y Discriminación en XYZ Corporación',
    time:2
   },
   {
    id:'2',
    name : 'Raquel Ortiz',
    location:'Bogotá, Colombia ',
    image : '',
    job : 'Especialidad',
    job1 : 'Especialidad',
    description: 'Reclamación por Despido Injusto y Discriminación en XYZ Corporación',
    time:2
   },
   {
    id:'3',
    name : 'Raquel Ortiz',
    location:'Bogotá, Colombia ',
    image : '',
    job : 'Especialidad',
    job1 : 'Especialidad',
    description: 'Reclamación por Despido Injusto y Discriminación en XYZ Corporación',
    time:2
   },
   {
    id:'4',
    name : 'Raquel Ortiz',
    location:'Bogotá, Colombia ',
    image : '',
    job : 'Especialidad',
    job1 : 'Especialidad',
    description: 'Reclamación por Despido Injusto y Discriminación en XYZ Corporación',
    time:2
   },
   {
    id:'5',
    name : 'Raquel Ortiz',
    location:'Bogotá, Colombia ',
    image : '',
    job : 'Especialidad',
    job1 : 'Especialidad',
    description: 'Reclamación por Despido Injusto y Discriminación en XYZ Corporación',
    time:2
   },
   {
    id:'6',
    name : 'Raquel Ortiz',
    location:'Bogotá, Colombia ',
    image : '',
    job : 'Especialidad',
    job1 : 'Especialidad',
    description: 'Reclamación por Despido Injusto y Discriminación en XYZ Corporación',
    time:2
   },
   {
    id:'7',
    name : 'Raquel Ortiz',
    location:'Bogotá, Colombia ',
    image : '',
    job : 'Especialidad',
    job1 : 'Especialidad',
    description: 'Reclamación por Despido Injusto y Discriminación en XYZ Corporación',
    time:2
   },
   {
    id:'8',
    name : 'Raquel Ortiz',
    location:'Bogotá, Colombia ',
    image : '',
    job : 'Especialidad',
    job1 : 'Especialidad',
    description: 'Reclamación por Despido Injusto y Discriminación en XYZ Corporación',
    time:2
   }
   ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goVacancie(id:Object): void {
    this.router.navigate([`/vacancy-avalaible/${id}`]);
  }


}
