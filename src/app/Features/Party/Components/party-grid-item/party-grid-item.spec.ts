import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyGridItem } from './party-grid-item';

describe('PartyGridItem', () => {
  let component: PartyGridItem;
  let fixture: ComponentFixture<PartyGridItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyGridItem],
    }).compileComponents();

    fixture = TestBed.createComponent(PartyGridItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
