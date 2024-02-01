import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesAnaliticsComponent } from './cases-analitics.component';

describe('CasesAnaliticsComponent', () => {
  let component: CasesAnaliticsComponent;
  let fixture: ComponentFixture<CasesAnaliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasesAnaliticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesAnaliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
