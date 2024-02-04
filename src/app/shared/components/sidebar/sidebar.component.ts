

import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  directTo(param:string): void {
    this.router.navigate([`/${param}`]);
  }

}
