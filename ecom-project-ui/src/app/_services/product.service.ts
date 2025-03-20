<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_model/product.model'; // Ensure correct path

@Injectable({
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product.model';  // Adjust path if necessary


@Injectable({

>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
  providedIn: 'root'
})
export class ProductService {

<<<<<<< HEAD
  constructor(private httpClient: HttpClient) { }

  public addProduct(product: FormData): Observable<Product> {
    return this.httpClient.post<Product>("http://localhost:9090/addNewProduct", product);
  }
}
=======
  constructor( private httpClient:HttpClient) { }
  public addProduct(product:FormData){
    return this.httpClient.post<Product>("http://localhost:9090/addNewProduct",product);
  }
  public getAllProducts(){

    return this.httpClient.get<Product[]>("http://localhost:9090/getAllProducts");
  }

  public deleteProduct(productId: number){
  return this.httpClient.delete("http://localhost:9090/deleteProductDetails/"+productId);
} 
}

>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
