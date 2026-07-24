import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartySideBar } from './party-side-bar';

describe('PartySideBar', () => {
  let component: PartySideBar;
  let fixture: ComponentFixture<PartySideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartySideBar],
    }).compileComponents();

    fixture = TestBed.createComponent(PartySideBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
