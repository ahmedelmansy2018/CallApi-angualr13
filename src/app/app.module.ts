import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
 import { HomeComponent } from './Component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directive/light-box.directive';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { EmployeesComponent } from './Component/employee/employees/employees.component';
import { ShowemployeesComponent } from './Component/employee/showemployees/showemployees.component';
import { AddEditemployeeComponent } from './Component/employee/add-editemployee/add-editemployee.component';
import { NotFoundComponentComponent } from './Component/not-found-component/not-found-component.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
     HomeComponent,
     LightBoxDirective,
     SignInComponent,
     EmployeesComponent,
     ShowemployeesComponent,
     AddEditemployeeComponent,
     NotFoundComponentComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
