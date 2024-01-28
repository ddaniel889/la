import { Component, OnInit } from '@angular/core';
import { FilterChangesComponent } from '../filter-changes/filter-changes.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'history-changes',
  templateUrl: './history-changes.component.html',
  styleUrls: ['./history-changes.component.scss']
})
export class HistoryChangesComponent implements OnInit {

  constructor( private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFilters() {
    this.dialog.open(FilterChangesComponent , {
     // data: { material },
      width: "750px",
      height:  "550px",
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
