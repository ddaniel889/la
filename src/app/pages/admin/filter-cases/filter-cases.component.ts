import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-cases',
  templateUrl: './filter-cases.component.html',
  styleUrls: ['./filter-cases.component.scss']
})
export class FilterCasesComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatDialogRef<FilterCasesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string }
  ) { }

  ngOnInit(): void {
  }

}
