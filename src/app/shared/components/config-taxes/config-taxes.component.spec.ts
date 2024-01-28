import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigTaxesComponent } from './config-taxes.component';

describe('ConfigTaxesComponent', () => {
  let component: ConfigTaxesComponent;
  let fixture: ComponentFixture<ConfigTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigTaxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
