import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementPage } from './disbursement-page';

describe('DisbursementPage', () => {
  let component: DisbursementPage;
  let fixture: ComponentFixture<DisbursementPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisbursementPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DisbursementPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
