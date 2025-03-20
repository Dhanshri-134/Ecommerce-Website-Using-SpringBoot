import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
<<<<<<< HEAD
=======
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  {path:'addNewProduct',component:AddNewProductComponent},
<<<<<<< HEAD
  { path: 'forbidden', component: ForbiddenComponent }
=======
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'showProductDetails', component: ShowProductDetailsComponent },
  { path: 'addNewProduct', component: AddNewProductComponent,canActivate:[AuthGuard],data:{roles:['Admin']} }
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}