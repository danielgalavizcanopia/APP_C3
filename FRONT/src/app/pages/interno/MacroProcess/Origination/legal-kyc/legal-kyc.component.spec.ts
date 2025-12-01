import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalKYCComponent } from './legal-kyc.component';

describe('LegalKYCComponent', () => {
  let component: LegalKYCComponent;
  let fixture: ComponentFixture<LegalKYCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalKYCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalKYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
