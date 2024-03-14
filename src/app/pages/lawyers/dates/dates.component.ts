import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CancelDatingComponent } from '../cancel-dating/cancel-dating.component';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  public total = [
    {
    id:'0',
    title : 'Defensa en el Caso de Propiedad Intelectual: Protegiendo la innovación',
    type:'virtual',
    date : 'Septiembre 17 del 2023',
    time : '10:00 AM - 11:00 AM ',
    person:'Raquel Ortiz',
    matter:'Pago: Pendiente'
   },
   {
    id:'0',
    title : 'Defensa en el Caso de Propiedad Intelectual: Protegiendo la innovación',
    type:'virtual',
    date : 'Septiembre 17 del 2023',
    time : '10:00 AM - 11:00 AM ',
    person:'Raquel Ortiz',
    matter:'Pago: Pendiente'
   },
   {
    id:'0',
    title : 'Defensa en el Caso de Propiedad Intelectual: Protegiendo la innovación',
    type:'virtual',
    date : 'Septiembre 17 del 2023',
    time : '10:00 AM - 11:00 AM ',
    person:'Raquel Ortiz',
    matter:'Pago: Pendiente'
   }
   ];

  constructor(private readonly dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }

  goDating(id:string): void {
    this.router.navigate([`/dating-detail/${id}`]);
  }

  editDating(id:string): void {
    this.router.navigate([`/edit-dating/${id}`]);
  }

  cancelDating() {
    this.dialog.open(CancelDatingComponent  , {
     // data: { material },
      width: "350px",
      height:  "200px",
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
