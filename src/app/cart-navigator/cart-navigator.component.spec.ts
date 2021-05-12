import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartNavigatorComponent } from './cart-navigator.component';

describe('CartNavigatorComponent', () => {
  let component: CartNavigatorComponent;
  let fixture: ComponentFixture<CartNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartNavigatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
