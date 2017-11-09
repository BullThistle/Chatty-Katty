import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

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
  @ViewChild('scroller') private feedContainer: ElementRef;

  constructor(private roomService: RoomService) {  }

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
  
  ngAfterViewChecked() {
    if (this.localRoom.flag == 2){
      this.scrollToBottom();
    }
    this.localRoom.flag++;
  }
  
  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop = this.feedContainer.nativeElement.scrollHeight;
  }

  sendMessage(message: ChatMessage) {
    if(message.text.length > 0){
      this.roomService.sendMessage(this.room.$key, message);
    }
    this.localRoom.flag = 0;
  }

}
