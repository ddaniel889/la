import { Component, OnInit } from '@angular/core';
import { AssignTicketComponent } from '../assign-ticket/assign-ticket.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-client-support',
  templateUrl: './client-support.component.html',
  styleUrls: ['./client-support.component.scss']
})
export class ClientSupportComponent implements OnInit {
  public content:boolean = false;
  public request:boolean = false;


  constructor(
    private readonly dialog: MatDialog,
  ) {

   }

  ngOnInit(): void {
    this.content = true;
  }


   add() {
    this.request = true;
    this.content = false;
  }

  openAsign() {
    this.dialog.open(AssignTicketComponent , {
     // data: { material },
      width: "460px",
      height:  "410px",
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
