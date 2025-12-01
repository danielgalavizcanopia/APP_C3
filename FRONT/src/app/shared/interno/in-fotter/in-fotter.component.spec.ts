import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InFotterComponent } from './in-fotter.component';

describe('InFotterComponent', () => {
  let component: InFotterComponent;
  let fixture: ComponentFixture<InFotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InFotterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InFotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
