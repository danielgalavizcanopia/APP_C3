import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InBodyComponent } from './in-body.component';

describe('InBodyComponent', () => {
  let component: InBodyComponent;
  let fixture: ComponentFixture<InBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
