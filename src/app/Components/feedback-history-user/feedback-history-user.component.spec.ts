import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackHistoryUserComponent } from './feedback-history-user.component';

describe('FeedbackHistoryUserComponent', () => {
  let component: FeedbackHistoryUserComponent;
  let fixture: ComponentFixture<FeedbackHistoryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackHistoryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackHistoryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
