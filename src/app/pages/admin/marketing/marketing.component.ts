import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CampaignFilterComponent } from '../campaign-filter/campaign-filter.component';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {
  public content:boolean = false;
  public new:boolean = false;
  public active:boolean = false;

  constructor(private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.content = true;
  }


  openFilters() {
    this.dialog.open(CampaignFilterComponent , {
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

  create(): void {
    this.content = false;
  }
}
