import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexComponent } from './apex.component';

describe('ApexComponent', () => {
  let component: ApexComponent;
  let fixture: ComponentFixture<ApexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexComponent]
    });
    fixture = TestBed.createComponent(ApexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
