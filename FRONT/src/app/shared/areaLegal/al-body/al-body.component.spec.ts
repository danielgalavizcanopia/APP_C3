import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALBodyComponent } from './al-body.component';

describe('ALBodyComponent', () => {
  let component: ALBodyComponent;
  let fixture: ComponentFixture<ALBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ALBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
