import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOfSalesforceComponent } from './book-of-salesforce.component';

describe('BookOfSalesforceComponent', () => {
  let component: BookOfSalesforceComponent;
  let fixture: ComponentFixture<BookOfSalesforceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookOfSalesforceComponent]
    });
    fixture = TestBed.createComponent(BookOfSalesforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
