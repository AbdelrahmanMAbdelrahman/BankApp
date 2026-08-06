import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityCreatePage } from './facility-create-page';

describe('FacilityCreatePage', () => {
  let component: FacilityCreatePage;
  let fixture: ComponentFixture<FacilityCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityCreatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(FacilityCreatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
