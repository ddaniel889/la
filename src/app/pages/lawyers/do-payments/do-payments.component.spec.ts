import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoPaymentsComponent } from './do-payments.component';

describe('DoPaymentsComponent', () => {
  let component: DoPaymentsComponent;
  let fixture: ComponentFixture<DoPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
