import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: BookingFormComponent},
  {path: 'edit/:id', component: BookingFormComponent},
  {path: 'list', component: BookingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
