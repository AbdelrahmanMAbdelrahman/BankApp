import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyListPage } from './party-list-page';

describe('PartyListPage', () => {
  let component: PartyListPage;
  let fixture: ComponentFixture<PartyListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PartyListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
