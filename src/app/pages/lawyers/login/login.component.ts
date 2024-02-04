import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goRegister(): void {
    this.router.navigate(['/register']);
  }

  goTerms(): void {
    this.router.navigate(['/terms']);
  }

  goRecovery(): void {
    this.router.navigate(['/recovery']);
  }

  goProfile(): void {
    this.router.navigate(['/profile']);
  }


}
