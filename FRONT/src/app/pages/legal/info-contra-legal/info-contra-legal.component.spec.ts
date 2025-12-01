import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContraLegalComponent } from './info-contra-legal.component';

describe('InfoContraLegalComponent', () => {
  let component: InfoContraLegalComponent;
  let fixture: ComponentFixture<InfoContraLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoContraLegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoContraLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
