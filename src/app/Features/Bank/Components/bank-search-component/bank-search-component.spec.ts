import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSearchComponent } from './bank-search-component';

describe('BankSearchComponent', () => {
  let component: BankSearchComponent;
  let fixture: ComponentFixture<BankSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankSearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
