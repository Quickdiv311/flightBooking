import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking/booking.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

bookingForm!: FormGroup;
nameValue = 'passengerName';
booking?: Booking;
id?: string;

constructor(private bookingService: BookingService, private router: Router, private route: ActivatedRoute){}

ngOnInit(): void {

  this.route.params.subscribe((params: Params) => {
    this.id = params['id'];
    this.initializeForm();
  })
}

get passengerControls(){
  return (this.bookingForm.get('passengerList') as FormArray).controls;
}

addPassenger(){
  (this.bookingForm.get('passengerList') as FormArray).push(new FormGroup({
    'name': new FormControl(null, Validators.required),
    'age': new FormControl(null, Validators.required)
  }));
}

removePassenger(i: number){
  (this.bookingForm.get('passengerList') as FormArray).removeAt(i);
}

onSubmit(){
  let newBooking:Booking = this.bookingForm.value;
  
  if(this.id)
    this.bookingService.editBooking(this.id, newBooking);
  else
   this.bookingService.addBooking(newBooking);
   this.router.navigate(['list']);
}

initializeForm(){
  
  let passengers = new FormArray<FormGroup>([]);

  if(this.id){
    this.booking = this.bookingService.getBookingItem(this.id);
  }

  if(this.booking){
    for(let passenger of this.booking.passengerList){
     passengers.push(
       new FormGroup({
        'name': new FormControl(passenger.name, Validators.required),
        'age': new FormControl(passenger.age, Validators.required)
       })
     )
    }
 }
 else
   passengers.push(
   new FormGroup({
     'name': new FormControl(null, Validators.required),
     'age': new FormControl(null, Validators.required)
   })
);

 this.bookingForm = new FormGroup({
      'fromCity': new FormControl(this.booking?.fromCity, Validators.required),
      'toCity': new FormControl(this.booking?.toCity, Validators.required),
      'journeyDate': new FormControl(this.booking?.journeyDate, Validators.required),
      'passengerList': passengers
 })
}
}
