import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesTablesComponent } from './cases-tables.component';

describe('CasesTablesComponent', () => {
  let component: CasesTablesComponent;
  let fixture: ComponentFixture<CasesTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
