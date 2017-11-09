import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  createUserError: string;

  constructor(public _firebaseAuth: AngularFireAuth, private router: Router) { 
    this.user = _firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }
  
  signIn(
    email: string,
    password: string
  ) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((respond) => {
      this.router.navigate(["dashboard"]);
    })
    .catch((error) => {
      this.createUserError = error.message;
    });
  }

  // isLoggedIn() {
  // if (this.userDetails == null ) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['login']));
  }
  
  createUser(
    username: string,
    email: string,
    password: string,
  ) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(respond) {
        let user = firebase.auth().currentUser;
        return user.updateProfile({
          displayName: username,
          photoURL: ""
        });
      })
      .then(() => firebase.auth().signOut())
      .catch((error) => {
        this.createUserError = error.message;
      });
  }
}
