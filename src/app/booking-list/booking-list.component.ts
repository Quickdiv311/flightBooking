import { Component, OnInit } from '@angular/core';
import { Booking, Passenger } from '../models/booking';
import { BookingService } from '../booking/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit{
   bookings?: Booking[];
   passengerCount = 1;

   constructor(private bookingService: BookingService){}

   ngOnInit(): void {
    this.bookings =  this.bookingService.getBookingList();
   }

   deleteABooking(id: string){
    this.bookingService.deleteBooking(id);
   }
}
