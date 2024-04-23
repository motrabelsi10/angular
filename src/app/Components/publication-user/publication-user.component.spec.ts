import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationUserComponent } from './publication-user.component';

describe('PublicationUserComponent', () => {
  let component: PublicationUserComponent;
  let fixture: ComponentFixture<PublicationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
