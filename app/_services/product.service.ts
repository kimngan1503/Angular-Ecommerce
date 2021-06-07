// import { productUrl } from './../config/api';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './../_models/product';
import { Injectable } from '@angular/core';

const apiUrl = "http://localhost:3000/product";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  // products : Product[] = [
  //   new Product(1, 'Product 1', 'This is the product 1 description. helen helen helen', 100),
  //   new Product(2, 'Product 2', 'This is the product 2 description. helen helen helen', 200),
  //   new Product(3, 'Product 3', 'This is the product 3 description. helen helen helen', 300),
  //   new Product(4, 'Product 4', 'This is the product 4 description. helen helen helen', 400),
  //   new Product(5, 'Product 5', 'This is the product 5 description. helen helen helen', 500),
  //   new Product(6, 'Product 6', 'This is the product 6 description. helen helen helen', 600),
  //   new Product(7, 'Product 7', 'This is the product 7 description. helen helen helen', 700),
  //   new Product(8, 'Product 8', 'This is the product 8 description. helen helen helen', 800),
  // ]

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(apiUrl);
    // return this.http.get<Product[]>(productUrl);
  }
}
