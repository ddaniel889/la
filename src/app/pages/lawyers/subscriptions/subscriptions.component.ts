import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private readonly dialogRef: MatDialogRef<SubscriptionsComponent>,private router: Router) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  goPayment(): void {
    this.router.navigate(['/do-payment']);
    this.close();
  }

}
