import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCreateComponent } from './currency-create-component';

describe('CurrencyCreateComponent', () => {
  let component: CurrencyCreateComponent;
  let fixture: ComponentFixture<CurrencyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
