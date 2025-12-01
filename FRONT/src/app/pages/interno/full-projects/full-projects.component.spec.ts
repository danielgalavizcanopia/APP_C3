import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProjectsComponent } from './full-projects.component';

describe('FullProjectsComponent', () => {
  let component: FullProjectsComponent;
  let fixture: ComponentFixture<FullProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
