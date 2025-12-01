import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALBreadcrumbComponent } from './al-breadcrumb.component';

describe('ALBreadcrumbComponent', () => {
  let component: ALBreadcrumbComponent;
  let fixture: ComponentFixture<ALBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ALBreadcrumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
