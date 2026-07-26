import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDetailPage } from './contract-detail-page';

describe('ContractDetailPage', () => {
  let component: ContractDetailPage;
  let fixture: ComponentFixture<ContractDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
