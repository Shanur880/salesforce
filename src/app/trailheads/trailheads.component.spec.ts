import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailheadsComponent } from './trailheads.component';

describe('TrailheadsComponent', () => {
  let component: TrailheadsComponent;
  let fixture: ComponentFixture<TrailheadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailheadsComponent]
    });
    fixture = TestBed.createComponent(TrailheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
