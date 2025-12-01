import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaLegalComponent } from './agenda-legal.component';

describe('AgendaLegalComponent', () => {
  let component: AgendaLegalComponent;
  let fixture: ComponentFixture<AgendaLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaLegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
