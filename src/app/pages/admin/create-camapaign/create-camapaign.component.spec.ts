import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCamapaignComponent } from './create-camapaign.component';

describe('CreateCamapaignComponent', () => {
  let component: CreateCamapaignComponent;
  let fixture: ComponentFixture<CreateCamapaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCamapaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCamapaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
