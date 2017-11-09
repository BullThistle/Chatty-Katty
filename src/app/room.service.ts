import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { ChatMessage } from './components/models/chat-message.model';
import { ChatRoom } from './components/models/chat-room.model';

@Injectable()
export class RoomService {
  rooms: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.rooms = database.list('chatrooms');
  }

  getRooms() {
    return this.rooms;
  }

  findRoom(key: string) {
    return this.database.object('chatrooms/' + key);
  }

  getMessages(roomID: string) {
    var messages = this.database.list('messages/' + roomID);
    return messages;
  }

  sendMessage(roomID: string, message: ChatMessage) {
    var messages = this.database.list('messages/' + roomID);
    messages.push(message);
    firebase.database().ref('chatrooms/' + roomID + '/lastMessage').set(message.text);
    firebase.database().ref('chatrooms/' + roomID + '/timestamp').set(message.timestamp);
  }

  addRoom(room: ChatRoom, message: ChatMessage) {
    var roomID = this.rooms.push(room).key;
    this.sendMessage(roomID, message);
  }

}
