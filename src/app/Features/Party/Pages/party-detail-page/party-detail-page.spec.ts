import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDetailPage } from './party-detail-page';

describe('PartyDetailPage', () => {
  let component: PartyDetailPage;
  let fixture: ComponentFixture<PartyDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PartyDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
