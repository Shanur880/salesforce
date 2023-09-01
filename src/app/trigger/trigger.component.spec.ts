import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerComponent } from './trigger.component';

describe('TriggerComponent', () => {
  let component: TriggerComponent;
  let fixture: ComponentFixture<TriggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TriggerComponent]
    });
    fixture = TestBed.createComponent(TriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
