import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractGridComponent } from './contract-grid-component';

describe('ContractGridComponent', () => {
  let component: ContractGridComponent;
  let fixture: ComponentFixture<ContractGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractGridComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
