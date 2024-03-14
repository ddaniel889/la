import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelDatingComponent } from './cancel-dating.component';

describe('CancelDatingComponent', () => {
  let component: CancelDatingComponent;
  let fixture: ComponentFixture<CancelDatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelDatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelDatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
