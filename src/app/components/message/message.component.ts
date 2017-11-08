import { Component, OnInit, Input } from '@angular/core';

import { ChatMessage } from '../models/chat-message.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: ChatMessage;
  infoShow: boolean;

  constructor() { }

  ngOnInit() {
  }

  formatDate(timestamp: number) {
    return new Date(timestamp);
  }

  isToday(timestamp: number) {
    let date: Date = new Date(timestamp);
    let today: Date = new Date(Date.now());
    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
      return 'shortTime';
    } else {
      return 'mediumDate';
    }
  }

  imgHover() {
    this.infoShow = true;
  }

  imgLeave() {
    this.infoShow = false;
  }

}
