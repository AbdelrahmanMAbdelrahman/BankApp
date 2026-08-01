import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCreatePage } from './currency-create-page';

describe('CurrencyCreatePage', () => {
  let component: CurrencyCreatePage;
  let fixture: ComponentFixture<CurrencyCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCreatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyCreatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
