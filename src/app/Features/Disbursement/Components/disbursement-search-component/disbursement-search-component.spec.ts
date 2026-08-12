import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementSearchComponent } from './disbursement-search-component';

describe('DisbursementSearchComponent', () => {
  let component: DisbursementSearchComponent;
  let fixture: ComponentFixture<DisbursementSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisbursementSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisbursementSearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
