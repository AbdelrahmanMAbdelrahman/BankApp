import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyListCompoent } from './party-list-compoent';

describe('PartyListCompoent', () => {
  let component: PartyListCompoent;
  let fixture: ComponentFixture<PartyListCompoent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyListCompoent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartyListCompoent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
