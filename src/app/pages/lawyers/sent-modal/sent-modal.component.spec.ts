import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentModalComponent } from './sent-modal.component';

describe('SentModalComponent', () => {
  let component: SentModalComponent;
  let fixture: ComponentFixture<SentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
