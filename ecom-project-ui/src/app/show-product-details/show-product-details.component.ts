import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from "../_model/product.model";  // Ensure correct path

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit {
  productDetails: Product[] = [];
  dataSource: Product[] = [];  // This will be the data for your table
  displayedColumns: string[] = ['productId', 'productName', 'productDescription', 'productDiscountedPrice', 'productActualPrice'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProduct();  // Fetch the products when the component is initialized
  }

  public getAllProduct(): void {
    this.productService.getAllProducts().subscribe(
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
