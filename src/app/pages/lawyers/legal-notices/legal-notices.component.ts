import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-legal-notices',
  templateUrl: './legal-notices.component.html',
  styleUrls: ['./legal-notices.component.scss']
})
export class LegalNoticesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goBack(): void {
    this.router.navigate(['/login']);
  }

}
