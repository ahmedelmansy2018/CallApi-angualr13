import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Component/employee/employees/employees.component';
import { HomeComponent } from './Component/home/home.component';
import { NotFoundComponentComponent } from './Component/not-found-component/not-found-component.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';

// const routes: Routes = [ // First-match wins strategy
//   {path: '', component: MainLayoutComponent, children:[
//     {path: '', redirectTo: '/Home', pathMatch: 'full'}, //Default path
//     {path: 'Home', component: HomeComponent},
//     {path: 'Products', component: ProductListComponent},
//     {path: 'Products/:pid', component: ProductDetailsComponent},
//     {path: 'Product/Add', component: AddProductComponent},
//     {path: 'Order', component: OrderMasterComponent, canActivate:[AuthGuard]},
//     {
//       path: 'User',
//       loadChildren: () => import('src/app/Components/user-module/user-module.module')
//                             .then(m=>m.UserModuleModule)
//     },
//   ]},
//   {path:'Login', component:UserLoginComponent},
//   {path:'Register', component:UserRegisterComponent},
//   {path:'Logout', component:UserLoginComponent},
//   {path: '**', component:NotFoundComponent}// Wild card path
// ];

const routes: Routes = [
   {
    path: 'Login',
    component: SignInComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: ' Employee',
    component: EmployeesComponent,
  },
 
  {
    path: '**',
    component: NotFoundComponentComponent,
  },
    {path:'Logout', component:SignInComponent},

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Login',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
