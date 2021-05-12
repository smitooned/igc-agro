import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionSliderLeftComponent } from './description-slider-left.component';

describe('DescriptionSliderLeftComponent', () => {
  let component: DescriptionSliderLeftComponent;
  let fixture: ComponentFixture<DescriptionSliderLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionSliderLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionSliderLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
