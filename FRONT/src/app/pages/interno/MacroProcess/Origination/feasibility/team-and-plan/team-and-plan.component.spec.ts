import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAndPlanComponent } from './team-and-plan.component';

describe('TeamAndPlanComponent', () => {
  let component: TeamAndPlanComponent;
  let fixture: ComponentFixture<TeamAndPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamAndPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamAndPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
