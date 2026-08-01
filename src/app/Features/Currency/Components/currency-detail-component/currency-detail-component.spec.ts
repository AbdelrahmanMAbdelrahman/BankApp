import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDetailComponent } from './currency-detail-component';

describe('CurrencyDetailComponent', () => {
  let component: CurrencyDetailComponent;
  let fixture: ComponentFixture<CurrencyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
