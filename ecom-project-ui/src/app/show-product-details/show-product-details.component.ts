import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from "../_model/product.model"; // Ensure correct path
import { ProductService } from '../_services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {
  productDetails: Product[] = [];
  dataSource: Product[] = [];  // This will be the data for your table
  displayedColumns: string[] = ['productId', 'productName', 'productDescription', 'productDiscountedPrice', 'productActualPrice', 'Images', 'Actions'];

  constructor(
    private productService: ProductService,
    public imagesDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProduct();  // Fetch the products when the component is initialized
  }

  // Fetch all products with their images processed
  public getAllProduct(): void {
    this.productService.getAllProducts().subscribe(
      (resp: Product[]) => {
        console.log('API Response:', resp); // Log API response for debugging
        this.productDetails = resp;
        this.dataSource = this.productDetails; // Assign data to the table's dataSource
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  // Delete a product
  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        // Refresh product list after deletion
        this.getAllProduct();
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
