import { FileHandle } from "../model/file-handle.model";
import { Product } from "../model/product.model";
import { NgForm } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../model/product.model";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  product: Product = {
    productName: '',
    productDescription: '',
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productImage: []
  };

  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  addaProduct(productForm: NgForm) {
    const productFormData = this.prepareFormData(this.product);
    this.productService.addProduct(this.product).subscribe(
      (response: Product) => {
        productForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  prepareFormData(product: Product): FormData {
    const formData = new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(product)], { type: 'application/json' })
    );
    for (let i = 0; i < product.productImage.length; i++) {
      formData.append(
        'imageFile',
        product.productImage[i].file,
        product.productImage[i].file.name
      );
    }
    return formData;
  }

  onFileSelected(event) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      };
      this.product.productImage.push(fileHandle);
    }
  }
}