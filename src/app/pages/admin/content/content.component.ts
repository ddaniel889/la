import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsFiltersComponent } from '../news-filters/news-filters.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public news:boolean = false;
  public resources:boolean = false;
  public notificacions:boolean = false;
  public content:boolean = false;
  public preview:boolean = false;

  constructor( private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.content = true;
  }

  openFilters() {
    this.dialog.open(NewsFiltersComponent , {
     // data: { material },
      width: "800px",
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

  getNews(): void {
    this.news = true;
    this.resources =false;
    this.notificacions = false;
    this.content = false;
  }

  getResources(): void {
    this.resources = true;
    this.news = false;
    this.notificacions = false;
    this.content = false;
  }

  getNotificacions(): void {
    this.resources = false;
    this.news = false;
    this.notificacions = true;
    this.content = false;
  }

  getPreview(): void {
    this.preview = true;
    this.resources = false;
    this.news = false;
    this.notificacions = false;
    this.content = false;
  }



}
