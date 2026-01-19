import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAdmit } from './daily-admit.component';

describe('DailyAdmit', () => {
  let component: DailyAdmit;
  let fixture: ComponentFixture<DailyAdmit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyAdmit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyAdmit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
