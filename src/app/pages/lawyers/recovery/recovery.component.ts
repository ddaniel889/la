import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goRegister(): void {
    this.router.navigate(['/register']);
  }

  goTerms(): void {
    this.router.navigate(['/terms']);
  }

}
