import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGapsComponent } from './line-gaps.component';

describe('LineGapsComponent', () => {
  let component: LineGapsComponent;
  let fixture: ComponentFixture<LineGapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineGapsComponent]
    });
    fixture = TestBed.createComponent(LineGapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
