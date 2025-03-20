<<<<<<< HEAD
import { FileHandle } from "../_model/file-handle.model";
import { Product } from "../_model/product.model";
import { NgForm } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../_services/product.service";
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-new-product',
  templateUrl: 'add-new-product.component.html',
=======
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { DomSanitizer } from "@angular/platform-browser";
import { FileHandle } from "../_model/file-handle.model";
import { Product } from "../_model/product.model";
import { ProductService } from "../_services/product.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './add-new-product.component.html',
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  product: Product = {
    productName: '',
    productDescription: '',
    productDiscountedPrice: 0,
    productActualPrice: 0,
<<<<<<< HEAD
    productImages: [] 
  };

  constructor(private productService: ProductService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  // onFileSelected(event: Event) {
  //   const input = event.target as HTMLInputElement;

  //   if (input.files) {
  //     for (let i = 0; i < input.files.length; i++) {
  //       const file = input.files[i];
  //       const fileHandle: FileHandle = {
  //         file: file,
  //         url: URL.createObjectURL(file)
  //       };
  //       this.product.productImage.push(fileHandle);
  //     }
  //   }
  // }

  prepareFormData(product: Product):FormData{
    const formData = new FormData();
    formData.append(
      'append',
      new Blob([JSON.stringify(product)], {type: 'application/json'})
    );

    for(var i = 0;i<product.productImages.length;i++){
      formData.append(
        'imageFile',
        product.productImages[i].file,
        product.productImages[i].file.name
      )
    }
    return formData;
  }

  onFileSelected(event){
    if(event.target.files){
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file:file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.product.productImages.push(fileHandle);
    }
  }


  addProduct(productForm: NgForm) {
    const productFormData = this.prepareFormData(this.product);
=======
    productImages: [] // Correct initialization
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
        this.product.productImages.push(fileHandle);
      }
    }
  }
  removeImages(index: number) {
    this.product.productImages.splice(index, 1);
  }
  addProduct(productForm: NgForm) {
    const productFormData=this.prepareFormData(this.product);

>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
    this.productService.addProduct(productFormData).subscribe(
      (response: Product) => {
        console.log(response);
        productForm.resetForm();
<<<<<<< HEAD
=======
        this.product.productImages=[];
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
<<<<<<< HEAD
  
  removeImages(i: number){
   this.product.productImages.splice(i,1);
=======
  prepareFormData(product:Product):FormData{
    const formData=new FormData();
    formData.append(
      "product",
      new Blob([JSON.stringify(product)],{type:'application/json'})
    );
    for(var i=0;i<product.productImages.length;i++){
      formData.append(
        'imageFile',
        product.productImages[i].file,
        product.productImages[i].file.name

      );
    }
    return formData;
  }
  fileDropped(fileHandle:FileHandle)
  {
    this.product.productImages.push(fileHandle);
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
  }
}