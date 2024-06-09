import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: Booking[] = [];

  constructor() { 
    let sealedBookings = localStorage.getItem("bookings");
    this.bookings = sealedBookings ? JSON.parse(sealedBookings) : [];
  }

  getBookingList(){
    return this.bookings;
  }

  getBookingItem(id: string){
    let bi = this.bookings.findIndex(i => i.id == id);
    return this.bookings[bi];
  }

  addBooking(booking: Booking){
    booking.id = Date.now().toString();
    this.bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(this.bookings));
  }

  editBooking(id : string, booking: Booking){
    let bi = this.bookings.findIndex(i => i.id == id);
    this.bookings[bi] = {...booking};
    this.bookings[bi].id = id;
    localStorage.setItem("bookings", JSON.stringify(this.bookings));
  }

  deleteBooking(id: string){
    let bi = this.bookings.findIndex(i => i.id == id);
    this.bookings.splice(bi, 1);
    localStorage.setItem("bookings", JSON.stringify(this.bookings));
  }
}
