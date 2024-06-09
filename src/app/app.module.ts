import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BookingModule } from './booking/booking.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingItemComponent } from './booking-list/booking-item/booking-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BookingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
