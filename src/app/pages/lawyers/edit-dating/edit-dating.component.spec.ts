import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDatingComponent } from './edit-dating.component';

describe('EditDatingComponent', () => {
  let component: EditDatingComponent;
  let fixture: ComponentFixture<EditDatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
