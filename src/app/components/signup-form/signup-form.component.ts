import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from "firebase/app";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  providers: [AuthService, AngularFireAuth]
})
export class SignupFormComponent implements OnInit {
user: Observable<firebase.User>;

constructor(
  public authService: AuthService,
  private route: ActivatedRoute,
  // private location: Location,
  public afAuth: AngularFireAuth,
  public router: Router
) {
  this.user = afAuth.authState;

}

  ngOnInit() {
  }
  
  submitSignUpForm(
   username: string,
   email: string,
   password: string,
 ) {
     this.authService.createUser(username, email, password);
     this.router.navigate(["login"]);
   }
   
   goToLogin() {
     this.router.navigate(['login']);
   }
 }
  
