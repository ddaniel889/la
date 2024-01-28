import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryChangesComponent } from './history-changes.component';

describe('HistoryChangesComponent', () => {
  let component: HistoryChangesComponent;
  let fixture: ComponentFixture<HistoryChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
