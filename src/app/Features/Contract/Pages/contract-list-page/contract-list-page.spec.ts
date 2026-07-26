import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractListPage } from './contract-list-page';

describe('ContractListPage', () => {
  let component: ContractListPage;
  let fixture: ComponentFixture<ContractListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
