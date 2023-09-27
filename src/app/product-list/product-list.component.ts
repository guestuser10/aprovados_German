import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product} from '../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit{
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  selectedproduct: Product | undefined;
  noProduct: any;
  products:Product[] = [
    {
      name: 'webcam', 
      precio: 100
    },
    {
      name: 'microphone', 
      precio: 200
    },
    {
      name: 'keyboard', 
      precio: 80
    },
  ];
  products2 = {
    'webcam': 100,
    'mein kaft': 200,
    'keyboard':80
  }
  onbuy() {
    window.alert(`you just bought ${this.selectedproduct?.name}! that cost ${this.selectedproduct?.precio}`);
  }
  ngAfterViewInit(): void {
    if (this.productDetail && this.productDetail.product) {
      console.log(this.productDetail.product.name);
    }
  }
  trackByProducts(index:number, name:Product): string { 
    return name.name 
  }
  today = new Date();
}