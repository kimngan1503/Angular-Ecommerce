import { ProductService } from './../../_services/product.service';
import { Product } from './../../_models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html'
})
export class StoreListComponent implements OnInit {

  productList: Product[] = []

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(){
    // console.log(this.productService.getProducts());
    // this.productList = this.productService.getProducts();
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

}
