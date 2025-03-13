import { FileHandle } from "../_model/file-handle.model";
import { Product } from "../_model/product.model";
import { NgForm } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductService } from "../_services/product.service";
import { HttpErrorResponse } from '@angular/common/http';
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
    productImage: [] // Correct initialization
  };

  constructor(private productService: ProductService,
    private sanitizer:DomSanitizer) {}

  ngOnInit(): void {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const fileHandle: FileHandle = {
          file: file,
          url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))


        };
        this.product.productImage.push(fileHandle);
      }
    }
  }
  removeImages(index: number) {
    this.product.productImage.splice(index, 1);
  }
  addProduct(productForm: NgForm) {
    const productFormData=this.prepareFormData(this.product);

    this.productService.addProduct(productFormData).subscribe(
      (response: Product) => {
        console.log(response);
        productForm.resetForm();
        this.product.productImage=[];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  prepareFormData(product:Product):FormData{
    const formData=new FormData();
    formData.append(
      "product",
      new Blob([JSON.stringify(product)],{type:'application/json'})
    );
    for(var i=0;i<product.productImage.length;i++){
      formData.append(
        'imageFile',
        product.productImage[i].file,
        product.productImage[i].file.name

      );
    }
    return formData;
  }
  fileDropped(fileHandle:FileHandle)
  {
    this.product.productImage.push(fileHandle);
  }
}