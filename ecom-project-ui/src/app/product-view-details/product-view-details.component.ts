import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{Product} from '../_model/product.model';
@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent implements OnInit {

  selectedProductIndex=0;
  product:Product;
  constructor(private activatedRoute:ActivatedRoute,
<<<<<<< HEAD
    private router: Router) { }
=======
    private router:Router  ) { }
>>>>>>> 0fc15ad2b77e54d12989640f3810ac410e689ec3

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];
    console.log(this.product);
  }
  changeIndex(index)
  {
    this.selectedProductIndex=index;
  }
<<<<<<< HEAD
  buyProduct(ProductId){
 this.router.navigate(['/buyProduct',{
  isSingleProductCheckout: true, id: ProductId
 }]);
=======
  buyProduct(productId){
    this.router.navigate(['/buyProduct', {
      isSingleProductCheckout: true, id: productId
    }]);
>>>>>>> 0fc15ad2b77e54d12989640f3810ac410e689ec3
  }
}
