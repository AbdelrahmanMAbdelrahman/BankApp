import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyListPage } from './currency-list-page';

describe('CurrencyListPage', () => {
  let component: CurrencyListPage;
  let fixture: ComponentFixture<CurrencyListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
