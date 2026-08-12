import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetailPage } from './bank-detail-page';

describe('BankDetailPage', () => {
  let component: BankDetailPage;
  let fixture: ComponentFixture<BankDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BankDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
