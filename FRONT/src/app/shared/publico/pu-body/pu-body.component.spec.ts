import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuBodyComponent } from './pu-body.component';

describe('PuBodyComponent', () => {
  let component: PuBodyComponent;
  let fixture: ComponentFixture<PuBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
