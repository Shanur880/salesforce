import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperbadgesComponent } from './superbadges.component';

describe('SuperbadgesComponent', () => {
  let component: SuperbadgesComponent;
  let fixture: ComponentFixture<SuperbadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperbadgesComponent]
    });
    fixture = TestBed.createComponent(SuperbadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
