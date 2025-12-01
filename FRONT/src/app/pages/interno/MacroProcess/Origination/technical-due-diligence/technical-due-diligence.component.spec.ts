import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDueDiligenceComponent } from './technical-due-diligence.component';

describe('TechnicalDueDiligenceComponent', () => {
  let component: TechnicalDueDiligenceComponent;
  let fixture: ComponentFixture<TechnicalDueDiligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalDueDiligenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalDueDiligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
