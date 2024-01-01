import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss']
})
export class FilterUsersComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatDialogRef<FilterUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string }
  ) {}

  ngOnInit(): void {
  }

}
