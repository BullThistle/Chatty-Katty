import { Component } from '@angular/core';
import { AuthService } from './components/services/auth.service';
import { Router } from '@angular/router';
import { ChatRoom } from './components/models/chat-room.model';
import { RoomService } from './room.service';
import { ElectronService } from './providers/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService, RoomService]
})
export class AppComponent {
  
  user;
  private isLoggedIn: Boolean;
  private userName: String;
  focusedRoom: ChatRoom;
  
  constructor(public electronService: ElectronService, public authService: AuthService, private router: Router) {

    if (electronService.isElectron()) {
      console.log('Mode electron');
      // Check if electron is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.ipcRenderer);
      // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
    
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  focusRoom(room: ChatRoom) {
    this.focusedRoom = room;
  }
}

