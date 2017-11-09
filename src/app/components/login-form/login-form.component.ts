import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user = null;
  

  constructor(private authService: AuthService, private router: Router) { 
    
  }


  //  signInWithTwitter() {
  //     this.authService.signInWithTwitter()
  //     .then((res) => { 
  //         this.router.navigate(['dashboard'])
  //       })
  //     .catch((err) => console.log(err));
  //   }


    // signInWithFacebook() {
    //   this.authService.signInWithFacebook()
    //   .then((res) => { 
    //       this.router.navigate(['dashboard'])
    //     })
    //   .catch((err) => console.log(err));
    // }

    signInWithGoogle() {
      console.log("this is this", this);
      this.authService.signInWithGoogle()
      .then((res) => { 
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
    }
    
    signInWithFacebook() {
      this.authService.signInWithFacebook()
    //   .then((res) => { 
    //       this.router.navigate(['dashboard'])
    //     })
    //   .catch((err) => console.log(err));
    // }
  }
    
  logIn(
    email: string,
    password: string
  ) {
    this.authService.signIn(email, password);
  }

  goToSignup() {
    this.router.navigate(['signup'])
  }
    

  ngOnInit() {
  }

}
