import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementCreateComponent } from './disbursement-create-component';

describe('DisbursementCreateComponent', () => {
  let component: DisbursementCreateComponent;
  let fixture: ComponentFixture<DisbursementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisbursementCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisbursementCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
