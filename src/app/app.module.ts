import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { OptionsComponent } from './components/options/options.component';
import {  HttpClientModule } from '@angular/common/http';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarPipe } from './pipes/car.pipe';
import { BrandPipe } from './pipes/brand.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import { FiltercarComponent } from './components/filtercar/filtercar.component';

import { CustomerComponent } from './components/customer/customer.component';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    OptionsComponent,
    CardetailComponent,
    CarPipe,
    BrandPipe,
    ColorPipe,
    FilterpipePipe,
    FiltercarComponent,
    CustomerComponent,
    RentalComponent,
    PaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-center"
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  title:"Recap Project"
}
