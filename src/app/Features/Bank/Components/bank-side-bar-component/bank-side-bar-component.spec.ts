import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSideBarComponent } from './bank-side-bar-component';

describe('BankSideBarComponent', () => {
  let component: BankSideBarComponent;
  let fixture: ComponentFixture<BankSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankSideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankSideBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
