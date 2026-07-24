import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartySearchCompoent } from './party-search-compoent';

describe('PartySearchCompoent', () => {
  let component: PartySearchCompoent;
  let fixture: ComponentFixture<PartySearchCompoent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartySearchCompoent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartySearchCompoent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
