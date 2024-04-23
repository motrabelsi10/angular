import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementHistoryUserComponent } from './equipement-history-user.component';

describe('EquipementHistoryUserComponent', () => {
  let component: EquipementHistoryUserComponent;
  let fixture: ComponentFixture<EquipementHistoryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementHistoryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipementHistoryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
