import {  } from '@angular/compiler';
import { Component, Input, Output, EventEmitter,
  ViewEncapsulation, ChangeDetectionStrategy, OnInit, OnChanges, SimpleChanges
  } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent implements OnInit, OnChanges{
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();
  buy(){
    this.bought.emit();
  }
  get ProductName(): string { 
    console.log('Get ${this.product.name}');
    if (this.product) {
      console.log(`Get ${this.product?.name}`);
      return this.product.name;
    }
    return '';
  }
  constructor() {
    console.log(`Name is ${this.product?.name} in the constructor`);
  }
  ngOnInit(): void {
    console.log(`Name is ${this.product?.name} on the init`);
  }
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (product && !product.isFirstChange()) {
      const oldValue = product.previousValue?.name;
      const newValue = product.currentValue?.name;
      console.log(`product changed from ${oldValue} to ${newValue}`);
    }
  }
  
}


