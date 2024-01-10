import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public report:boolean = false;
  public content:boolean = false;
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
