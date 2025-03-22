import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { map } from 'rxjs/operators';
import { Product } from '../_model/product.model';
import { ImageProcessingService } from '../image-processing.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productDetails = [];
  dataSource: any[];

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  public getAllProduct(): void {
      this.productService.getAllProducts()
      .pipe(
        map((x:Product[],i) => x.map((product: Product)=>this.imageProcessingService.createImages(product)))
      )  
      .subscribe(
        (resp: Product[]) => {
          console.log('Products:', resp);
          this.productDetails = resp;  // Store the product details
          this.dataSource = this.productDetails;  // Assign to dataSource for mat-table
        },
        (error: HttpErrorResponse) => {
          console.error('Error fetching products:', error);
        }
      );
    }
  
}
