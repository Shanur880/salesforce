import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apexpage2Component } from './apexpage2.component';

describe('Apexpage2Component', () => {
  let component: Apexpage2Component;
  let fixture: ComponentFixture<Apexpage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Apexpage2Component]
    });
    fixture = TestBed.createComponent(Apexpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
