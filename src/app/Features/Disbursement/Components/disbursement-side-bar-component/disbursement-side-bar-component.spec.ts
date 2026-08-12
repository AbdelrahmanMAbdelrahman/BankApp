import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementSideBarComponent } from './disbursement-side-bar-component';

describe('DisbursementSideBarComponent', () => {
  let component: DisbursementSideBarComponent;
  let fixture: ComponentFixture<DisbursementSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisbursementSideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisbursementSideBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
