import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCasesComponent } from './filter-cases.component';

describe('FilterCasesComponent', () => {
  let component: FilterCasesComponent;
  let fixture: ComponentFixture<FilterCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
