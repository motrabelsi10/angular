import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsChartsComponent } from './tickets-charts.component';

describe('TicketsChartsComponent', () => {
  let component: TicketsChartsComponent;
  let fixture: ComponentFixture<TicketsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
