import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInvoiceComponent } from './text-invoice.component';

describe('TextInvoiceComponent', () => {
  let component: TextInvoiceComponent;
  let fixture: ComponentFixture<TextInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
