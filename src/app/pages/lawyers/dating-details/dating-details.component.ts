import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dating-details',
  templateUrl: './dating-details.component.html',
  styleUrls: ['./dating-details.component.scss']
})
export class DatingDetailsComponent {
  public calling:boolean = false;
  public noCall:boolean = true;
  public init:boolean = false;

  constructor(private router: Router) { }

  goDates(): void {
    this.router.navigate(['/dates/']);
  }
}
