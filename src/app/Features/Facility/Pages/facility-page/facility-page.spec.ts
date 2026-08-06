import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityPage } from './facility-page';

describe('FacilityPage', () => {
  let component: FacilityPage;
  let fixture: ComponentFixture<FacilityPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FacilityPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
