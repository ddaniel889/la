import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private readonly dialogRef: MatDialogRef<SubscriptionsComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
