import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-step',
  templateUrl: './register-step.component.html',
  styleUrls: ['./register-step.component.scss']
})
export class RegisterStepComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  goTerms(): void {
    //this.router.navigate(['/terms']);
  }

}
