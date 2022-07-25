import { Component, OnInit } from '@angular/core';
import { Flipkart_type } from 'src/app/flipkart_type';
import { ProductsService } from 'src/app/sevices/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Flipkart_type[] =[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((products)=>(
        this.products = products
      ));
  }

  onToggleLatest(product: Flipkart_type){
    product.latest = !product.latest;
    console.log(product.latest);
  }

}
