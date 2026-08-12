import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementDetailPage } from './disbursement-detail-page';

describe('DisbursementDetailPage', () => {
  let component: DisbursementDetailPage;
  let fixture: ComponentFixture<DisbursementDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisbursementDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DisbursementDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
