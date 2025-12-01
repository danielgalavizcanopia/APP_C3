import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserLegalComponent } from './admin-user-legal.component';

describe('AdminUserLegalComponent', () => {
  let component: AdminUserLegalComponent;
  let fixture: ComponentFixture<AdminUserLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserLegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
