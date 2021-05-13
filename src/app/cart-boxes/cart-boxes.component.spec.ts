import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBoxesComponent } from './cart-boxes.component';

describe('CartBoxesComponent', () => {
  let component: CartBoxesComponent;
  let fixture: ComponentFixture<CartBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
