import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALFotterComponent } from './al-fotter.component';

describe('ALFotterComponent', () => {
  let component: ALFotterComponent;
  let fixture: ComponentFixture<ALFotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ALFotterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALFotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
