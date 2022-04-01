import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSetupComponent } from './staff-setup.component';

describe('StaffSetupComponent', () => {
  let component: StaffSetupComponent;
  let fixture: ComponentFixture<StaffSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
