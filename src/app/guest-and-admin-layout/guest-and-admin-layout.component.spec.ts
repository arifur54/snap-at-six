import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAndAdminLayoutComponent } from './guest-and-admin-layout.component';

describe('GuestAndAdminLayoutComponent', () => {
  let component: GuestAndAdminLayoutComponent;
  let fixture: ComponentFixture<GuestAndAdminLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestAndAdminLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestAndAdminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
