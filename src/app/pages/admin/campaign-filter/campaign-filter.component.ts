import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-campaign-filter',
  templateUrl: './campaign-filter.component.html',
  styleUrls: ['./campaign-filter.component.scss']
})
export class CampaignFilterComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatDialogRef<CampaignFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string }
  ) { }

  ngOnInit(): void {
  }

}
