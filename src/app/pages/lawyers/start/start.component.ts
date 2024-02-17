import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SubscriptionsComponent  } from '../subscriptions/subscriptions.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public dates = [{
    name : 'Nombre de la cita',
    matter:'Reunión virtual',
    date : 'Mar, 7 Sep',
    time : '7:00 - 8:00 AM',
   },
   {
    name : 'Nombre de la cita',
    matter:'Reunión virtual',
    date : 'Mar, 7 Sep',
    time : '7:00 - 8:00 AM',
   },
   {
    name : 'Nombre de la cita',
    matter:'Reunión virtual',
    date : 'Mar, 7 Sep',
    time : '7:00 - 8:00 AM',
   },

   ];

   public cases = [{
    number : 'Nombre de la cita',
    matter:'Nombre otorgado al caso a tratar',
    update : '3 actualizaciones realizadas',

   },
   {
    name : 'Nombre de la cita',
    matter:'Nombre otorgado al caso a tratar',
    update : '3 actualizaciones realizadas',

   },
   {
    name : 'Nombre de la cita',
    matter:'Nombre otorgado al caso a tratar',
    update : '3 actualizaciones realizadas',
   },

   ];

  constructor(private readonly dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }

  goProfile(): void {
    this.router.navigate(['main-profile']);
  }

  openSubscriptions() {
    this.dialog.open(SubscriptionsComponent , {
     // data: { material },
      width: "1200px",
      height:  "650px",
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
