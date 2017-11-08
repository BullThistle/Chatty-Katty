import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { ChatMessage } from '../models/chat-message.model';
import { ChatRoom } from '../models/chat-room.model';
import { RoomService } from '../../room.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.css'],
  providers: [RoomService]
})

export class NewRoomComponent implements OnInit {
  roomName: string = '';
  userName: string;
  userID: string;

  constructor(private roomService: RoomService, public authService: AuthService) {
    this.authService.user.subscribe(user => {
      if (user != null) {
        this.userName = user.displayName;
        this.userID = user.uid;
      }
    });
  }

  ngOnInit() {
  }

  addRoom(value: any) {
    var newRoom = new ChatRoom(value.roomName, `${this.userName} created new room "${value.roomName}"`, Date.now());
    var newRoomMessage = new ChatMessage(newRoom.lastMessage, newRoom.timestamp, this.userName, this.userID)
    this.roomName = '';
    this.roomService.addRoom(newRoom, newRoomMessage);
  }

}
