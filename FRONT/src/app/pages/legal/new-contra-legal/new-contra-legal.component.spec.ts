import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContraLegalComponent } from './new-contra-legal.component';

describe('NewContraLegalComponent', () => {
  let component: NewContraLegalComponent;
  let fixture: ComponentFixture<NewContraLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewContraLegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewContraLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
