import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsInfoComponent } from './guests-info.component';

describe('GuestsInfoComponent', () => {
  let component: GuestsInfoComponent;
  let fixture: ComponentFixture<GuestsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
