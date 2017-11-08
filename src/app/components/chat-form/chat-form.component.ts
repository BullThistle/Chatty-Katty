import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ChatMessage } from '../models/chat-message.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  messageText: string = '';
  @Output() newMessage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMessage(value: any) {
    var message = new ChatMessage(value.messageText, Date.now(), "anonymous");
    this.messageText = '';
    this.newMessage.emit(message);
  }

}
