import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDetailsUserComponent } from './volunteer-details-user.component';

describe('VolunteerDetailsUserComponent', () => {
  let component: VolunteerDetailsUserComponent;
  let fixture: ComponentFixture<VolunteerDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerDetailsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
