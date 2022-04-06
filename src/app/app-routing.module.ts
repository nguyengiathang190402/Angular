import { ListProductComponent } from './client/list-product/list-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
// import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent} from './register/register.component'
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: 'phones',
        component: ListProductComponent,
      },
      {
        path: 'product/create',
        component: ProductFormComponent
      },
      {
        path: 'phones/:id',
        component: ProductDetailComponent
      },
      {
        path: 'product/:id/edit',
        component: ProductFormComponent
      },
    
      {
        path: 'app',
        component: AppComponent
      },
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
    ]
  },

      {
      path: 'admin',
      component: AdminComponent,
      children: [
        {
          path: '',
          redirectTo: 'products',
          pathMatch: 'full'
        },
      {
        path: 'phones',
        component: ProductComponent,
      },
      
      ]
      },
    ] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
