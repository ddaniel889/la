import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-news-filters',
  templateUrl: './news-filters.component.html',
  styleUrls: ['./news-filters.component.scss']
})
export class NewsFiltersComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatDialogRef<NewsFiltersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string }
  ) { }

  ngOnInit(): void {
  }

}
