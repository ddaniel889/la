import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCampaingnComponent } from './active-campaingn.component';

describe('ActiveCampaingnComponent', () => {
  let component: ActiveCampaingnComponent;
  let fixture: ComponentFixture<ActiveCampaingnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCampaingnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveCampaingnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
