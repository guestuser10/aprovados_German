import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductComponent } from '../product/product.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { FilterPipe } from '../filter.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    SortPipe,
  ],
  imports: [
    CommonModule,
    ProductComponent,
    FilterPipe,
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
  ]
})
export class ProductosModule {

}
