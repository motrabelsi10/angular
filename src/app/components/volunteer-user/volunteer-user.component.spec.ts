import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerUserComponent } from './volunteer-user.component';

describe('VolunteerUserComponent', () => {
  let component: VolunteerUserComponent;
  let fixture: ComponentFixture<VolunteerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
