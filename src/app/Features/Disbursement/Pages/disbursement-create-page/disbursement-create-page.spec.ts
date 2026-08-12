import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementCreatePage } from './disbursement-create-page';

describe('DisbursementCreatePage', () => {
  let component: DisbursementCreatePage;
  let fixture: ComponentFixture<DisbursementCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisbursementCreatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(DisbursementCreatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
