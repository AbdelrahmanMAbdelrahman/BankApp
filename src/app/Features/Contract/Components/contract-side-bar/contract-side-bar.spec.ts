import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSideBar } from './contract-side-bar';

describe('ContractSideBar', () => {
  let component: ContractSideBar;
  let fixture: ComponentFixture<ContractSideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractSideBar],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractSideBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
