import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from "../_model/product.model"; // Ensure correct path
import { ProductService } from '../_services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { ImageProcessingService } from '../image-processing.service'; // Correct path
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {
  productDetails: Product[] = [];
  dataSource: Product[] = [];  // This will be the data for your table
  displayedColumns: string[] = ['productId', 'productName', 'productDescription', 'productDiscountedPrice', 'productActualPrice','Images','Edit','Delete'];

  constructor(private productService: ProductService,
    public imagesDialog: MatDialog,
    private imageProcessingService: ImageProcessingService,
    private router: Router) {}


  ngOnInit(): void {
    this.getAllProduct();  // Fetch the products when the component is initialized
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

  deleteProduct(productId){
    this.productService.deleteProduct(productId).subscribe(
      (resp)=>{
        this.getAllProduct();
      },
      (error:HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  showImages(product:Product){
    console.log(product);
    this.imagesDialog.open(ShowProductImagesDialogComponent, {
      data:{
        images: product.productImages
      },
      height:'500px',
      width:'800px'
    });
  }

  editProductDetails(productId){
    this.router.navigate(['/addNewProduct',{productId:productId}]);
  }


}