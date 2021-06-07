import { Product } from './../../../_models/product';
import { MessengerService } from './../../../_services/messenger.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-list-item',
  templateUrl: './store-list-item.component.html',
})
export class StoreListItemComponent implements OnInit {

  @Input() productItem: Product;
  constructor(
    private msg: MessengerService,
  ) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }
}
