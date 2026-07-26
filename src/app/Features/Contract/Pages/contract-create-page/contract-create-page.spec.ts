import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCreatePage } from './contract-create-page';

describe('ContractCreatePage', () => {
  let component: ContractCreatePage;
  let fixture: ComponentFixture<ContractCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractCreatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractCreatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
