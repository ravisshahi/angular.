import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';
// import { PRODUCT } from '../product-data';
import { products } from '../product-interface';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  private apiUrl ="http://localhost:4201/product";
  constructor(private http: HttpClient) { }

  getProduct(): Observable<products[]> {
  //   const products =of(PRODUCT);
  //   return products;
  return this.http.get<products[]>(this.apiUrl);
}
  deleteproduct(product: products): Observable<products>{
  const url=`${this.apiUrl}/${product.rating}`;
  return this.http.delete<products>(url);

}
  updateproductsReminder(product : products) :Observable<products>{
    const url =`${this.apiUrl}/${product.rating}`
    return this.http.put<products>(url, product, httpOptions);
  }

   addproducts(product: products): Observable<products>{
        return this.http.post<products>(this.apiUrl,product, httpOptions)
   }
}
