import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalDueDiligenceComponent } from './legal-due-diligence.component';

describe('LegalDueDiligenceComponent', () => {
  let component: LegalDueDiligenceComponent;
  let fixture: ComponentFixture<LegalDueDiligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalDueDiligenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalDueDiligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
