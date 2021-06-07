import { MessengerService } from './../../_services/messenger.service';
import { Product } from './../../_models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cartTotal = 0;

  cartItem = [
    // { id: 1, productId: 1, productName: 'Test 1', qty: 4, price: 100},
    // { id: 2, productId: 2, productName: 'Test 2', qty: 5, price: 50},
    // { id: 3, productId: 3, productName: 'Test 3', qty: 3, price: 150},
    // { id: 4, productId: 4, productName: 'Test 4', qty: 2, price: 200},
  ];
  constructor(
    private msg: MessengerService
  ) { }

  
  
  ngOnInit(): void {
    this.msg.getMsg().subscribe((product:Product) =>{
      // console.log(product)
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product){

    let productExists = false;

    for (let i in this.cartItem){
      if(this.cartItem[i].productId === product.id){
        this.cartItem[i].qty++;
        productExists = true;
        break;
      }
    }

    if(!productExists){
      this.cartItem.push({
        productId : product.id,
        productName: product.name,
        qty: 1,
        price: product.price,
      })
    }
    
    // if(this.cartItem.length === 0){
    //   this.cartItem.push({
    //     productId : product.id,
    //     productName: product.name,
    //     qty: 1,
    //     price: product.price,
    //   })
    // }
    // else{
    //   for(let i in this.cartItem){
    //     if(this.cartItem[i].productId === product.id){
    //       this.cartItem[i].qty++;
    //     }
    //     else{
    //       this.cartItem.push({
    //         productId : product.id,
    //         productName: product.name,
    //         qty: 1,
    //         price: product.price,
    //       })
    //     }
    //   }
    // }

    this.cartTotal = 0,
    this.cartItem.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    })
  }

}
