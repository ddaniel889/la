import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterChangesComponent } from './filter-changes.component';

describe('FilterChangesComponent', () => {
  let component: FilterChangesComponent;
  let fixture: ComponentFixture<FilterChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
