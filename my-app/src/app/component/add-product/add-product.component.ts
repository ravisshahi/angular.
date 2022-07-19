import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { products } from 'src/app/product-interface';
import { ProductService } from 'src/app/services/product.service';
import { U1Service } from 'src/app/services/u1.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  @Output() onAddproduct=new EventEmitter();


  brand:string='';
  model:string ='';
  processor:string ='';
  Reminder:boolean=false;
  showAddproduct?: boolean;
  subscription:Subscription;
   
  constructor(private u1Service: U1Service ) { 
    this.subscription = this.u1Service.ontoggle()
                                      .subscribe(
                                      (value) =>(this.showAddproduct=value)
                                      )

  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.brand){
      alert('pls add a product')
      return;
    }

    const newProduct={
      model: this.model,
      processor: this.processor,
      brand:this.brand,
      Reminder:this.Reminder
    }
    this.onAddproduct.emit(newProduct)
    this.model='';
    this.processor='';
    this.brand='';
    this.Reminder=false;
  }
  }
