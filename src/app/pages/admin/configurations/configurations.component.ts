import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterChangesComponent } from '../filter-changes/filter-changes.component';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.scss']
})
export class ConfigurationsComponent implements OnInit {
  public config:boolean = false
  public privacy:boolean = false;
  public password:boolean = false;
  public notifications:boolean = false;
  public taxes:boolean = false;
  public terms:boolean = false;
  public policies:boolean = false;
  public managers:boolean = false;
  public backup:boolean = false;
  public history:boolean = false;
  public languages:boolean = false;

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
    this.config = true
  }


  setPrivacy(): void {
    this.privacy = true
    this.config = false
    this.password = false
    this.notifications = false
    this.taxes = false
    this.terms = false
    this.policies = false
    this.managers = false
    this.backup = false
    this.history = false
    this.languages = false
  }

  setPassword(): void {
    this.privacy = false
    this.config = false
    this.password = true
    this.notifications = false
    this.taxes = false
    this.terms = false
    this.policies = false
    this.managers = false
    this.backup = false
    this.history = false
    this.languages = false
  }

  setNotifications(): void {
    this.privacy = false
    this.config = false
    this.password = false
    this.notifications = true
    this.taxes = false
    this.terms = false
    this.policies = false
    this.managers = false
    this.backup = false
    this.history = false
    this.languages = false
  }

  setTaxes(): void {
    this.privacy = false
    this.config = false
    this.password = false
    this.notifications = false
    this.taxes = true
    this.terms = false
    this.policies = false
    this.managers = false
    this.backup = false
    this.history = false
    this.languages = false
  }


  setTerms(): void {
    this.privacy = false
    this.config = false
    this.password = false
    this.notifications = false
    this.taxes = false
    this.terms = true
    this.policies = false
    this.managers = false
    this.backup = false
    this.history = false
    this.languages = false
  }

  setPolicy(): void {
    this.privacy = false
    this.config = false
    this.password = false
    this.notifications = false
    this.taxes = false
    this.terms = false
    this.policies = true
    this.managers = false
    this.backup = false
    this.history = false
    this.languages = false
  }

  setManagers(): void {
    this.privacy = false
    this.config = false
    this.password = false
    this.notifications = false
    this.taxes = false
    this.terms = false
    this.policies = false
    this.managers = true
    this.backup = false
    this.history = false
    this.languages = false
  }

  setBackup(): void {
    this.privacy = false
    this.config = false
    this.password = false
    this.notifications = false
    this.taxes = false
    this.terms = false
    this.policies = false
    this.managers = false
    this.backup = true
    this.history = false
    this.languages = false
  }

  sethistory(): void {
    this.privacy = false
    this.config = false
    this.password = false
    this.notifications = false
    this.taxes = false
    this.terms = false
    this.policies = false
    this.managers = false
    this.backup = false
    this.history = true
    this.languages = false
  }

  setlanguage(): void {
    this.privacy = false
    this.config = false
    this.password = false
    this.notifications = false
    this.taxes = false
    this.terms = false
    this.policies = false
    this.managers = false
    this.backup = false
    this.history = false
    this.languages = true
  }

  openFilters() {
    this.dialog.open(FilterChangesComponent , {
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
