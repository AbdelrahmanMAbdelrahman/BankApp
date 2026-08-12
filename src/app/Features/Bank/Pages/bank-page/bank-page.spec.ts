import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPage } from './bank-page';

describe('BankPage', () => {
  let component: BankPage;
  let fixture: ComponentFixture<BankPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankPage],
    }).compileComponents();

    fixture = TestBed.createComponent(BankPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
