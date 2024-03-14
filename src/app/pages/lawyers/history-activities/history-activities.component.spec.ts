import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryActivitiesComponent } from './history-activities.component';

describe('HistoryActivitiesComponent', () => {
  let component: HistoryActivitiesComponent;
  let fixture: ComponentFixture<HistoryActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
