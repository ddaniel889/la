import { DataTypeComponent } from './../data-type/data-type.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-analitics',
  templateUrl: './analitics.component.html',
  styleUrls: ['./analitics.component.scss']
})
export class AnaliticsComponent implements OnInit {

  public incomes: any;
  public active: any;


  constructor(
    private readonly dialog: MatDialog
  ) {

   }


  ngOnInit(): void {
  }

  openData() {
    this.dialog.open(DataTypeComponent , {
     // data: { material },
      width: "550px",
      height:  "800px",
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
