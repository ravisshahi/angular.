import { Injectable } from '@angular/core';
import { Fipkart_data_object } from '../flipkart_data_object';
import { Flipkart_type } from '../flipkart_type';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = "http://localhost:4201/products";

  constructor(private http: HttpClient) { }
  getProducts() : Observable<Flipkart_type[]>{
    // const products = of(Fipkart_data_object)
    // return products;
    return this.http.get<Flipkart_type[]>(this.apiUrl);
  }


}
