import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-pay',
  templateUrl: './button-pay.component.html',
  styleUrls: ['./button-pay.component.scss']
})
export class ButtonPayComponent implements OnInit {

  @Output() ClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickEv() {
      this.ClickEvent.emit();
  }

}
