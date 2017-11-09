import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';
import { ChatRoom } from '../models/chat-room.model';
import { ChatroomComponent } from '../chatroom/chatroom.component'
import { RoomService } from '../../room.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthService, RoomService]
})
export class DashboardComponent {
  user;
  private isLoggedIn: Boolean;
  public userName: String;
  focusedRoom: ChatRoom;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  focusRoom(room: ChatRoom) {
    this.focusedRoom = room;
    this.focusedRoom.flag = 0;
  }
}
