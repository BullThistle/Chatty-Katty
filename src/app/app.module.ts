import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ElectronService } from './providers/electron.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { FeedComponent } from './components/feed/feed.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MessageComponent } from './components/message/message.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './components/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { NewRoomComponent } from './components/new-room/new-room.component';
import { TimestampPipe } from './timestamp.pipe';

export const firebaseConfig = {
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  databaseURL: environment.firebase.databaseURL,
  storageBucket: environment.firebase.storageBucket,
  messagingSenderId: environment.firebase.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    LoginFormComponent,
    MessageComponent,
    SignupFormComponent,
    RoomListComponent,
    NewRoomComponent,
    DashboardComponent,
    TimestampPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ElectronService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
