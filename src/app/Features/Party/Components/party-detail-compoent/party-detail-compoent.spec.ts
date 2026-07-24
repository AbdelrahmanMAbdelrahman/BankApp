import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDetailCompoent } from './party-detail-compoent';

describe('PartyDetailCompoent', () => {
  let component: PartyDetailCompoent;
  let fixture: ComponentFixture<PartyDetailCompoent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyDetailCompoent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartyDetailCompoent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
