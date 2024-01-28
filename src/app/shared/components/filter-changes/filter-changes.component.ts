import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-changes',
  templateUrl: './filter-changes.component.html',
  styleUrls: ['./filter-changes.component.scss']
})
export class FilterChangesComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatDialogRef<FilterChangesComponent >,
    @Inject(MAT_DIALOG_DATA) public data: { title: string }
  ) { }

  ngOnInit(): void {
  }

}
