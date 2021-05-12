import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionInputRightComponent } from './description-input-right.component';

describe('DescriptionInputRightComponent', () => {
  let component: DescriptionInputRightComponent;
  let fixture: ComponentFixture<DescriptionInputRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionInputRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionInputRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
