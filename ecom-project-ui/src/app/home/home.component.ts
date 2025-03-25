import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { map } from 'rxjs/operators';
import { Product } from '../_model/product.model';
import { ImageProcessingService } from '../image-processing.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productDetails: Product[] = [];  // Typed as Product array
  dataSource: Product[] = [];  // Typed as Product array

  constructor(private productService: ProductService,
              private imageProcessingService: ImageProcessingService,
            private router:Router) { }

  ngOnInit(): void {
    this.getAllProduct();  // Fetch products on component init
  }

  public getAllProduct(): void {
    this.productService.getAllProducts()
      .pipe(
        map((products: Product[]) => products.map((product: Product) => 
          this.imageProcessingService.createImages(product)))  // Process images for each product
      )  
      .subscribe(
        (resp: Product[]) => {
          console.log('Products:', resp);
          this.productDetails = resp;  // Store fetched product details
          this.dataSource = this.productDetails;  // Assign product details to dataSource for table
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching products:', error);  // Handle any errors
        }
      );
  }
  showProductDetails(productId){
    this.router.navigate(['/productViewDetails'], { queryParams: { productId: productId } });

  }
}
