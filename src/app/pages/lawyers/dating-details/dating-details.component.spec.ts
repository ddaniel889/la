import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatingDetailsComponent } from './dating-details.component';

describe('DatingDetailsComponent', () => {
  let component: DatingDetailsComponent;
  let fixture: ComponentFixture<DatingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
