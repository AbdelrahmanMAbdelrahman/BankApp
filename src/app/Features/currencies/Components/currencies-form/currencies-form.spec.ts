import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesForm } from './currencies-form';

describe('CurrenciesForm', () => {
  let component: CurrenciesForm;
  let fixture: ComponentFixture<CurrenciesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrenciesForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrenciesForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
