import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectOnboardingComponent } from './prospect-onboarding.component';

describe('ProspectOnboardingComponent', () => {
  let component: ProspectOnboardingComponent;
  let fixture: ComponentFixture<ProspectOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProspectOnboardingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProspectOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
