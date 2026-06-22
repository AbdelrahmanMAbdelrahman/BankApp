import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreatPage } from './employee-creat-page';

describe('EmployeeCreatPage', () => {
  let component: EmployeeCreatPage;
  let fixture: ComponentFixture<EmployeeCreatPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCreatPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeCreatPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
