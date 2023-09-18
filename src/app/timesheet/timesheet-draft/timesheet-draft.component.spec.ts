import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDraftComponent } from './timesheet-draft.component';

describe('TimesheetDraftComponent', () => {
  let component: TimesheetDraftComponent;
  let fixture: ComponentFixture<TimesheetDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetDraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
