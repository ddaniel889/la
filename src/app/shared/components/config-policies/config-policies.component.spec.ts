import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPoliciesComponent } from './config-policies.component';

describe('ConfigPoliciesComponent', () => {
  let component: ConfigPoliciesComponent;
  let fixture: ComponentFixture<ConfigPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
