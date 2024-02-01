import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesAnaliticsComponent } from './incomes-analitics.component';

describe('IncomesAnaliticsComponent', () => {
  let component: IncomesAnaliticsComponent;
  let fixture: ComponentFixture<IncomesAnaliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomesAnaliticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomesAnaliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
