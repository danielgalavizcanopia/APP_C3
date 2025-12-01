import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdrEstimationComponent } from './cdr-estimation.component';

describe('CdrEstimationComponent', () => {
  let component: CdrEstimationComponent;
  let fixture: ComponentFixture<CdrEstimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdrEstimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdrEstimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
