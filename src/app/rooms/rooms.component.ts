import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{

  constructor() { }
  ngOnInit():void {
  }

  numberOfRooms = 10;
  hiddenRoom = false;
  toggle() {
    this.hiddenRoom =!this.hiddenRoom;
  };
  rooms : Room ={
    totalRoom: 10,
    avaliableRoom: 5,
    bookedRoom: 2
  } 

  roomList : RoomList[] =[
    {
    roomType : 'Single',
    amenities : 'Wifi, TV, Air Conditioner',
    price: 1000,
    photo: 'assets/images/room1.jpg',
    checInDate: new Date(2019, 1, 1),
    checkOutDate: new Date(2019, 1, 10)
  },
  {
    roomType : 'Double',
    amenities : 'Wifi, TV, Air Conditioner, Breakfast',
    price: 1500,
    photo: 'assets/images/room2.jpg',
    checInDate: new Date(2019, 1, 1),
    checkOutDate: new Date(2019, 1, 10)
  },
  {
    roomType : 'Triple',
    amenities : 'Wifi, TV, Air Conditioner, Breakfast, Kitchen',
    price: 2000,
    photo: 'assets/images/room3.jpg',
    checInDate: new Date(2019, 1, 1),
    checkOutDate: new Date(2019, 1, 10)
  }
  ]

}
