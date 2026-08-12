import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCreatePage } from './bank-create-page';

describe('BankCreatePage', () => {
  let component: BankCreatePage;
  let fixture: ComponentFixture<BankCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankCreatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(BankCreatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
