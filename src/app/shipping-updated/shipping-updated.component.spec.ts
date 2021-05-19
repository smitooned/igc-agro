import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingUpdatedComponent } from './shipping-updated.component';

describe('ShippingUpdatedComponent', () => {
  let component: ShippingUpdatedComponent;
  let fixture: ComponentFixture<ShippingUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingUpdatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
