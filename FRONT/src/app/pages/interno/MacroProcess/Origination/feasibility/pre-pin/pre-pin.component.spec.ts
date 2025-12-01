import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePinComponent } from './pre-pin.component';

describe('PrePinComponent', () => {
  let component: PrePinComponent;
  let fixture: ComponentFixture<PrePinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrePinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
