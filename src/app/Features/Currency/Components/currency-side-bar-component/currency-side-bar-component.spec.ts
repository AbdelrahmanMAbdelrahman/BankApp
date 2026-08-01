import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencySideBarComponent } from './currency-side-bar-component';

describe('CurrencySideBarComponent', () => {
  let component: CurrencySideBarComponent;
  let fixture: ComponentFixture<CurrencySideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencySideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencySideBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
