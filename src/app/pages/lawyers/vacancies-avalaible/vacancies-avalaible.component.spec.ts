import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesAvalaibleComponent } from './vacancies-avalaible.component';

describe('VacanciesAvalaibleComponent', () => {
  let component: VacanciesAvalaibleComponent;
  let fixture: ComponentFixture<VacanciesAvalaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacanciesAvalaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacanciesAvalaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
