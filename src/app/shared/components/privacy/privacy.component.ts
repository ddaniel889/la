import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {


  public users = [{
    name : 'Raquel Victoria',
    number : '#2345',
    date : 'Usuario desde Septiembre 23 2023',
   },
   {
    name : 'Raquel Victoria',
    number : '#2345',
    date : 'Usuario desde Septiembre 23 2023',
   },
   {
    name : 'Raquel Victoria',
    number : '#2345',
    date : 'Usuario desde Septiembre 23 2023',
   },
   {
    name : 'Raquel Victoria',
    number : '#2345',
    date : 'Usuario desde Septiembre 23 2023',
   },
   ];

   public data = [{
    name : 'Correo',
    email : 'correo1234@gmail.com',
    concept : 'Privado',
    icon:  'Privado'
   },
   {
    name : 'Cortraseña',
    email : '**************',
    concept : 'Privado',
    icon:  'Privado'
   },
   {
    name : 'Número',
    email : '3854166468686',
    concept : 'Público',
    icon:  'Privado'
   },
   {
    name : 'Género',
    email : 'Femenino',
    concept : 'Público',
    icon:  'Privado'
   },
   {
    name : 'Correo',
    email : 'correo1234@gmail.com',
    concept : 'Privado',
    icon:  'Privado'
   }
   ];

  constructor(private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFilters() {
    this.dialog.open(PrivacyComponent , {   //PrivacyComponent
     // data: { material },
      width: "750px",
      height:  "500px",
    }).afterClosed().subscribe({
      next: (res) => {
        if (res) {
        /*  this.storeService.updateQuantity(material._id, res).subscribe({
            next: () => {
              this.total -= material.total;
              this.total += res * material.price;
              this.materials[index].quantity = res;
              this.materials[index].total = res * material.price
              this.dialog.open(AlertComponent, { data: { title: "El material ha sido editado" } })
              this.getOrderGeneral();
            },
            error: (err) => {
              if (err.error == "not-enough-stock") {
                this.dialog.open(AlertComponent, { data: { title: "No hay suficiente stock de este material" } })
              }
            }
          })*/

        }

      }
    })
  }

}
