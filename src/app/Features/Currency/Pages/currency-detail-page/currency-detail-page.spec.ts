import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDetailPage } from './currency-detail-page';

describe('CurrencyDetailPage', () => {
  let component: CurrencyDetailPage;
  let fixture: ComponentFixture<CurrencyDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
