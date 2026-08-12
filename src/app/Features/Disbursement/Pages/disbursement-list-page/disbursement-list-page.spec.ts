import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementListPage } from './disbursement-list-page';

describe('DisbursementListPage', () => {
  let component: DisbursementListPage;
  let fixture: ComponentFixture<DisbursementListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisbursementListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DisbursementListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
