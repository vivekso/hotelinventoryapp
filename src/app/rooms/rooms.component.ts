import { Component, OnInit } from '@angular/core';

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
  }
}
