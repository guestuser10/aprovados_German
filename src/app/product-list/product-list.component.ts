import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedproduct = '';
  onbuy() {
    window.alert(`you just bought ${this.selectedproduct}!`);
  }
}

