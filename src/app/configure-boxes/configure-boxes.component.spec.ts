import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureBoxesComponent } from './configure-boxes.component';

describe('ConfigureBoxesComponent', () => {
  let component: ConfigureBoxesComponent;
  let fixture: ComponentFixture<ConfigureBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
