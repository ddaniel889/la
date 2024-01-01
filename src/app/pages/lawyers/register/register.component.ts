import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTerms(): void {
    this.router.navigate(['/terms']);
  }

  goLogin(): void {
    this.router.navigate(['/login']);
  }

}
