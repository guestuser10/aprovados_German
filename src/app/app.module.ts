import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductosModule } from './productos/productos.module';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { ProductHostDirective } from './product-host.directive';
import { PermissionDirective } from './permission.directive';
@NgModule({
  declarations: [
    AppComponent,
    CopyrightDirective,
    NumericDirective,
    ProductHostDirective,
    PermissionDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductComponent,
    ProductosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
