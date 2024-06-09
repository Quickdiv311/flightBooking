export interface Booking {
    id: string;
    journeyDate: Date;
    returnDate?: Date;
    fromCity: string;
    toCity: string;
    passengerList: Passenger[];
}

export interface Passenger{
    name: string;
    age: number;
}
