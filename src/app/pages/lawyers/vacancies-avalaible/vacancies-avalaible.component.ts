import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SentModalComponent} from '../sent-modal/sent-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-vacancies-avalaible',
  templateUrl: './vacancies-avalaible.component.html',
  styleUrls: ['./vacancies-avalaible.component.scss']
})
export class VacanciesAvalaibleComponent implements OnInit {

  constructor(private router: Router,private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  goVacancies(): void {
    this.router.navigate(['/vacancies']);
  }

  openModal() {
    this.dialog.open(SentModalComponent , {
     // data: { material },
      width: "412px",
      height:  "224px",
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
