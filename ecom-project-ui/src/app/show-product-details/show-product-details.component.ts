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
 showLoadMoreProductButton=false;
 showTable=false;
 pageNumber:number= 0;
 productDetails: Product[] = [];
  dataSource: Product[] = [];  // This will be the data for your table
  displayedColumns: string[] = ['productId', 'productName', 'productDescription', 'productDiscountedPrice', 'productActualPrice','Images','Actions'];

  constructor(
    private productService: ProductService,
    public imagesDialog: MatDialog,
    private imageProcessingService: ImageProcessingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts();  // Fetch the products when the component is initialized
  }

  // Fetch all products with their images processed
  searchByKeyword(searchkeyword){
    console.log(searchkeyword);
    this.pageNumber=0;
    this.productDetails=[];
    this.getAllProducts(searchkeyword);
  }
  
  public getAllProducts(searchKeyword: string ="") {
    this.showTable=false;
    this.productService. getAllProducts(this.pageNumber,searchKeyword)
    .pipe(
      map((x:Product[],i) => x.map((product:Product)=>this.imageProcessingService.createImages(product)))
    ).subscribe(
      (resp: Product[]) => {
        //console.log(resp);
        resp.forEach(product=>this.productDetails.push(product));
        console.log('msg',this.productDetails);
        this.showTable=true;
        if(resp.length==12){
          this.showLoadMoreProductButton=true;
        } else{
          this.showLoadMoreProductButton = false;
        }
        //this.productDetails = resp;
        this.dataSource = this.productDetails;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
    
  }

  loadMoreProduct(){
    this.pageNumber=this.pageNumber + 1;
    this.getAllProducts();
  }

  // Delete a product
  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        // Refresh product list after deletion
        this.getAllProducts();
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting product:', error);
      }
    );
  }

  // Open dialog to show product images
  showImages(product: Product): void {
    if (product.productImages && product.productImages.length > 0) {
      this.imagesDialog.open(ShowProductImagesDialogComponent, {
        data: {
          images: product.productImages
        },
        height: '500px',
        width: '800px'
      });
    } else {
      console.warn('No images available for this product.');
    }
  }

  // Navigate to the edit product form
  editProductDetails(productId: number): void {
    this.router.navigate(['/addNewProduct', { productId: productId }]);
  }
}