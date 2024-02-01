import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'account-managers',
  templateUrl: './account-managers.component.html',
  styleUrls: ['./account-managers.component.scss']
})
export class AccountManagersComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }


  getUser(id:string|number) {
    this.router.navigate([`/manager-detail/${id}`]);
  }

}
