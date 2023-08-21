import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleProgressBarComponent } from './circle-progress-bar.component';

describe('CircleProgressBarComponent', () => {
  let component: CircleProgressBarComponent;
  let fixture: ComponentFixture<CircleProgressBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleProgressBarComponent]
    });
    fixture = TestBed.createComponent(CircleProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
