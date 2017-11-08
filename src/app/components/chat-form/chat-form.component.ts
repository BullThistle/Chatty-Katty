import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ChatMessage } from '../models/chat-message.model';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css'],
})
export class ChatFormComponent implements OnInit {
  user;
  userName: string;
  userID: string;
  messageText: string = '';
  @Output() newMessage = new EventEmitter();

  constructor(public authService: AuthService) {
    this.authService.user.subscribe(user => {
      if (user != null) {
        this.userName = user.displayName;
        this.userID = user.uid;
      }
    });
  }

  ngOnInit() {
  }

  sendMessage(value: any) {
    var message = new ChatMessage(value.messageText, Date.now(), this.userName, this.userID);
    this.messageText = '';
    this.newMessage.emit(message);
  }

}
