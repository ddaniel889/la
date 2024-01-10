import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-support',
  templateUrl: './client-support.component.html',
  styleUrls: ['./client-support.component.scss']
})
export class ClientSupportComponent implements OnInit {
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
