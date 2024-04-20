import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubRegestrationComponent } from './club-regestration.component';

describe('ClubRegestrationComponent', () => {
  let component: ClubRegestrationComponent;
  let fixture: ComponentFixture<ClubRegestrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubRegestrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubRegestrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
