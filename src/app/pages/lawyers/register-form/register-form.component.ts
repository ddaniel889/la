import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goNextSteps(index:any): void {
    this.router.navigate([`/register-step/${index}`]);
  }

}
