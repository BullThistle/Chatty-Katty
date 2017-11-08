import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { ChatRoom } from '../models/chat-room.model';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  providers: [RoomService]
})
export class RoomListComponent implements OnInit {
  @Input() focusedRoom;
  @Output() roomClick = new EventEmitter();
  rooms: FirebaseListObservable<any[]>;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }

  focus(room: ChatRoom) {
    this.focusedRoom = room;
    this.roomClick.emit(room);
  }

  isFocused(room) {
    if (this.focusedRoom && this.focusedRoom.$key == room.$key) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

}
