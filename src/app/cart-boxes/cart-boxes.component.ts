import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-boxes',
  templateUrl: './cart-boxes.component.html',
  styleUrls: ['./cart-boxes.component.css']
})
export class CartBoxesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  public isCollapsed = true;
  @Input() item: any;
  @Input() index: any;
  @Output() boxConfigUpdated = new EventEmitter<object>();

  checkoutForm = this.formBuilder.group({
    to: '',
    message: '',
    from: ''
  });

  ngOnInit(): void {
  }

  getBoxNumber(index:any) {
    return index + 1
  }

  onSubmit() {
    console.log('Your order has been submitted', this.checkoutForm.value);
    let update = {
      checkoutVal: this.checkoutForm.value,
      itemID: this.item.itemID,
      productSize: this.item.productSize,
      productType: this.item.productType,
      indexOfItem: this.index
    };
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
    this.boxConfigUpdated.emit(update);
  }
}
