import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { BookingListComponent } from '../booking-list/booking-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BookingFormComponent,
    BookingListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class BookingModule { }
