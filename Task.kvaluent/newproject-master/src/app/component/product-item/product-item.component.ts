import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Flipkart_type } from 'src/app/flipkart_type';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product ?: Flipkart_type;
  @Output() onToggleLatest : EventEmitter<Flipkart_type> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  productToggle(product: Flipkart_type){
    this.onToggleLatest.emit(product);
  }

}
