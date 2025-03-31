import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './_model/file-handle.model';
import { Product } from './_model/product.model';



@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(product: Product): Product {
    const productImages: any[] = product.productImages || [];  // Ensure productImages is an array
    const productImagesToFileHandle: FileHandle[] = [];

    // If no images, return the product unchanged
    if (productImages.length === 0) {
      return product;
    }

    // Loop through all the images and convert them to FileHandles
    for (let i = 0; i < productImages.length; i++) {
      const imageFileData = productImages[i];

      // Ensure all necessary properties are present
      if (imageFileData && imageFileData.picBytes && imageFileData.type && imageFileData.name) {
        const imageBlob = this.dataURItoBlob(imageFileData.picBytes, imageFileData.type);
        const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });

        // Create a FileHandle with a sanitized URL for safe binding in the template
        const finalFileHandle: FileHandle = {
          file: imageFile,
          url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
        };

        // Add to the list of FileHandles
        productImagesToFileHandle.push(finalFileHandle);
      } else {
        console.error(`Invalid image data at index ${i}`, imageFileData);
      }
    }

    // Return a new product with processed images
    return {
      ...product,  // Spread the original product properties
      productImages: productImagesToFileHandle  // Add the processed images
    };
  }

  // Convert base64 data to a Blob
  public dataURItoBlob(picBytes: string, imageType: string): Blob {
    const byteString = window.atob(picBytes);  // Decode base64 to binary string
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    // Populate the Uint8Array with the byte data
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    // Return a Blob object
    const blob = new Blob([int8Array], { type: imageType });
    return blob;
  }
}
