import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAxisChartComponent } from './time-axis-chart.component';

describe('TimeAxisChartComponent', () => {
  let component: TimeAxisChartComponent;
  let fixture: ComponentFixture<TimeAxisChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeAxisChartComponent]
    });
    fixture = TestBed.createComponent(TimeAxisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
