import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../_model/order-details.model';
import { NgForm } from '@angular/forms';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
=======
import { ActivatedRoute, Router } from '@angular/router';
>>>>>>> 0fc15ad2b77e54d12989640f3810ac410e689ec3
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';


@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

<<<<<<< HEAD
  productDetails:Product[]=[];
 orderDetails: OrderDetails={
  fullName:'',
  fullAddress:'',
  contactNumber:'',
  alternateContactNumber:'',
  orderProductQuantityList:[]

 }
  constructor(private activateRoute:ActivatedRoute,
   private productService:ProductService) { }

  ngOnInit(): void {
    this.productDetails = this.activateRoute.snapshot.data['productDetails'];


   this.productDetails.forEach(
    x=>this.orderDetails.orderProductQuantityList.push(
      {productId: x.productId,quantity:1}
    )
   );
   console.log(this.productDetails)
   console.log(this.orderDetails);
=======
  productDetails:Product[] = [];
  orderDetails: OrderDetails={
    fullName:'',
    fullAddress:'',
    contactNumber:'',
    alternateContactNumber:'',
    orderProductQuantityList:[]
  }
  constructor(private activateRoute:ActivatedRoute,
   private productService:ProductService,
   private router: Router
   ) { }

  ngOnInit(): void {
    this.productDetails = this.activateRoute.snapshot.data['productDetails'];
    this.productDetails.forEach(
      x=>this.orderDetails.orderProductQuantityList.push(
        {productId: x.productId, quantity:1}
      )
    );
    console.log(this.productDetails)
    console.log(this.orderDetails);
>>>>>>> 0fc15ad2b77e54d12989640f3810ac410e689ec3
  }
  public placeOrder(orderForm:NgForm){
     this.productService.placeOrder(this.orderDetails).subscribe(
      (resp)=>{
<<<<<<< HEAD
        console.log();
        (resp);
        orderForm.reset();
=======
        console.log(resp);
        orderForm.reset();
        this.router.navigate(["/orderConfirm"]);
>>>>>>> 0fc15ad2b77e54d12989640f3810ac410e689ec3
      },
      (err)=>{
        console.log(err);
      })
<<<<<<< HEAD
     
  }

}
=======
  }

  public getQuantityForProduct(productId){
    const filteredProduct = this.orderDetails.orderProductQuantityList.filter(
      (productQuantity) =>productQuantity.productId === productId
    );

    return filteredProduct;
  }

  getCalculatedTotal(productId, productDiscountedPrice){
    const filteredProduct = this.orderDetails.orderProductQuantityList.filter(
      (productQuantity) =>productQuantity.productId === productId
    );

    return filteredProduct[0].quantity * productDiscountedPrice

  }
  onQuantityChanged(value, productId){
    this.orderDetails.orderProductQuantityList.filter(
      (orderProduct) => orderProduct.productId === productId
    )[0].quantity = value;
  }

  getCalculatedGrandTotal(){
    let grandTotal = 0;
    this.orderDetails.orderProductQuantityList.forEach(
          (productQuantity) => {
           const price =this.productDetails.filter(product => product.productId === productQuantity.productId)[0].productDiscountedPrice;
           grandTotal= grandTotal+price * productQuantity.quantity;
          }
        );
    return grandTotal;
  }
}
>>>>>>> 0fc15ad2b77e54d12989640f3810ac410e689ec3
