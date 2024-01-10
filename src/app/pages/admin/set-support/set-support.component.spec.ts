import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSupportComponent } from './set-support.component';

describe('SetSupportComponent', () => {
  let component: SetSupportComponent;
  let fixture: ComponentFixture<SetSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
