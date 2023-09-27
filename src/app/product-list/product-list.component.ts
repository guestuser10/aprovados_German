import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit{
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  selectedproduct = 'Yuumi';
  onbuy() {
    window.alert(`you just bought ${this.selectedproduct}!`);
  }
  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.name);
    }
  }
}