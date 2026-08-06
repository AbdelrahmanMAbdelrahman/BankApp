import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySideBar } from './facility-side-bar';

describe('FacilitySideBar', () => {
  let component: FacilitySideBar;
  let fixture: ComponentFixture<FacilitySideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilitySideBar],
    }).compileComponents();

    fixture = TestBed.createComponent(FacilitySideBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
