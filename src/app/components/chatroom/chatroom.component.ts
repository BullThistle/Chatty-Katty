import { Component, OnInit, Input } from '@angular/core';


import { User } from '../models/user.model';
import { ChatMessage } from '../models/chat-message.model';
import { ChatRoom } from '../models/chat-room.model';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  @Input() localRoom;
  room;
  messages;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.findRoom(this.localRoom.$key).subscribe(dataLastEmitted => {
      this.room = dataLastEmitted;
    });
    this.roomService.getMessages(this.localRoom.$key).subscribe(dataLastEmitted => {
      this.messages = dataLastEmitted;
    });
  }

  ngOnChanges() {
    this.roomService.findRoom(this.localRoom.$key).subscribe(dataLastEmitted => {
      this.room = dataLastEmitted;
    });
    this.roomService.getMessages(this.localRoom.$key).subscribe(dataLastEmitted => {
      this.messages = dataLastEmitted;
    });
  }

  sendMessage(message: ChatMessage) {
    this.roomService.sendMessage(this.room.$key, message);
  }

}
