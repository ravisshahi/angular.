import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/product-interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: products[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService
      .getProduct()
      .subscribe((products) =>
      (this.products = products
      ));
  }
  onDelete(product: products) {
    this.productService.deleteproduct(product).subscribe(() => (
        this.products = this.products.filter(p =>p.rating !== product.rating)
        ));
  }

  productToggle(product:products){
    product.Reminder = !product.Reminder;
    //console.log(product.Reminder)
        this.productService
         .updateproductsReminder(product)
         .subscribe()
  }
   addproduct(product: products){
    this.productService.addproducts(product)
    .subscribe((product) =>(this.products.push(product)))
    
    console.log(product)
   }
}