import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html',
  styleUrls: ['./admin-payments.component.scss']
})
export class AdminPaymentsComponent implements OnInit {
  public content:boolean = false;
  public report:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.content = true;
  }


  generate() {
    this.report = true;
    this.content = false;
    console.log('a')
  }

}
