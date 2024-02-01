import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAnaliticsComponent } from './active-analitics.component';

describe('ActiveAnaliticsComponent', () => {
  let component: ActiveAnaliticsComponent;
  let fixture: ComponentFixture<ActiveAnaliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveAnaliticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveAnaliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
