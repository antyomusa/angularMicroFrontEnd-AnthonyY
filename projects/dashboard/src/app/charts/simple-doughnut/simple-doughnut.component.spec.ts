import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDoughnutComponent } from './simple-doughnut.component';

describe('SimpleDoughnutComponent', () => {
  let component: SimpleDoughnutComponent;
  let fixture: ComponentFixture<SimpleDoughnutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleDoughnutComponent]
    });
    fixture = TestBed.createComponent(SimpleDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
