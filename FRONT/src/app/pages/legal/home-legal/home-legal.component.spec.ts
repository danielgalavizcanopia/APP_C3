import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLegalComponent } from './home-legal.component';

describe('HomeLegalComponent', () => {
  let component: HomeLegalComponent;
  let fixture: ComponentFixture<HomeLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
