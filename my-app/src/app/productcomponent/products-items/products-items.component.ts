import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { products } from 'src/app/product-interface';
import { faTimes,faAddressBook  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-items',
  templateUrl: './products-items.component.html',
  styleUrls: ['./products-items.component.css']
})
export class ProductsItemsComponent implements OnInit {
  faTimes = faTimes;
  @Input() product?: products;

  @Output() onDeleteproduct: EventEmitter<products>= new EventEmitter();
  @Output() onToggleReminder: EventEmitter<products>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(product: products){
    //console.log(product)
    this.onDeleteproduct.emit(product)
  }
  productToggle(product: products){
    this.onToggleReminder.emit(product)
  }
}
