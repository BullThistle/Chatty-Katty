import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { ChatMessage } from '../models/chat-message.model';
import { ChatRoom } from '../models/chat-room.model';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.css'],
  providers: [RoomService]
})

export class NewRoomComponent implements OnInit {
  roomName: string = '';

  constructor(private roomService: RoomService) { }

  ngOnInit() {
  }

  addRoom(value: any) {
    var newRoom = new ChatRoom(value.roomName, "New Room Created", Date.now());
    this.roomName = '';
    this.roomService.addRoom(newRoom);
  }

}
