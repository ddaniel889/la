import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public pageIndex = 0;
  public section = [{
   item : '¿Cómo funciona la aplicación de abogados?',
  },
  { item : '¿Qué tipos de casos legales cubre esta aplicación?'},
  {
    item : '¿Puedo obtener una consulta legal gratuita a través de la aplicación?'},
  { item : '¿Cómo puedo buscar y elegir un abogado en la aplicación?'},
  { item : '¿Cuánto cuesta utilizar la aplicación de abogados?'},
  { item : '¿Cómo puedo buscar y elegir un abogado en la aplicación?'},
  { item : '¿Cómo puedo buscar y elegir un abogado en la aplicación?'},
  { item : '¿Cómo puedo buscar y elegir un abogado en la aplicación?'},
  { item : '¿Cómo puedo buscar y elegir un abogado en la aplicación?'},

  ];

  constructor(private router :Router) { }

  ngOnInit(): void {
    this.pageIndex = 0;
  }

  nextStep() {
    if (this.pageIndex >= 3){
      return;
    }else{
      this.pageIndex += 1;
    }
  }

  setPage(i:number) {
    this.pageIndex = this.pageIndex + i;
  }

  prevStep() {
    if (this.pageIndex <= 0){
      this.router.navigate(['/onboarding']);
    }else{
      this.pageIndex -= 1;
    }
  }

}
