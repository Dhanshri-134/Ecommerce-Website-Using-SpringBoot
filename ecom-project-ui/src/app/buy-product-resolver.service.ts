import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from './image-processing.service';
<<<<<<< HEAD

=======
>>>>>>> 0fc15ad2b77e54d12989640f3810ac410e689ec3
import { Product } from './_model/product.model';
import { ProductService } from './_services/product.service';


@Injectable({
  providedIn: 'root'
})
export class BuyProductResolverService implements Resolve<Product[]> {

  constructor(private productService: ProductService,
    private imageProcessingService:ImageProcessingService) { }
  
<<<<<<< HEAD
  resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Product[] | Observable<Product[]>  | Promise<Product[]>{
   const id = route.paramMap.get("id");
   const isSingleProductCheckout=route.paramMap.get("isSingleProductCheckout");
=======
  resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Product[] | Observable<Product[]>  | Promise<Product[]>{
   const id = route.paramMap.get("id");
   const isSingleProductCheckout=route.paramMap.get("isSingleProductCheckout");
   
>>>>>>> 0fc15ad2b77e54d12989640f3810ac410e689ec3
   return this.productService.getProductDetails(isSingleProductCheckout,id)
   .pipe(
    map(
      (x:Product[],i)=>x.map((product:Product)=>this.imageProcessingService.createImages(product))
    )
   );
  }
}