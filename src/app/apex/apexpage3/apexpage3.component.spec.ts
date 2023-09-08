import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apexpage3Component } from './apexpage3.component';

describe('Apexpage3Component', () => {
  let component: Apexpage3Component;
  let fixture: ComponentFixture<Apexpage3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Apexpage3Component]
    });
    fixture = TestBed.createComponent(Apexpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
