import { Component, OnInit } from '@angular/core';
import {AuthService}  from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 isLoggedOut : boolean = false;

 signUpInfo = {
   username:'',
   password: ''

 };

 errorMessage : string;

 loginInfo = {
   username: '',
   password: ''

 };
 loginErrorMessage :string;

  constructor(
    private authThang : AuthService,
    private routerThang : Router
  ) { }

  ngOnInit() {
    this.authThang.checklogin()
     // If success, we are logged in.
     .then((resultFromApi) => {
         this.routerThang.navigate(['/rides']);
     })

        // Even if you don't do anything on error, catch to avoid a console error.
        .catch((err) => {
            this.isLoggedOut = true;
        });
    }

  signThemUp(){
    this.authThang.signup(this.signUpInfo)
    .then((resultFromApi)=> {
      //clear form
      this.signUpInfo= {
        username:'',
        password:''
      };
      // console.log(username)

      //clear error message
      this.errorMessage = '';

      //redirect to /rides
      this.routerThang.navigate(['/rides']);


    })
    .catch((err)=>{
      const parsedError = err.json();
      this.errorMessage= parsedError.message+ 'somethin went wrong';
    })
  }//close signThemUp

  doLogin(){
    this.authThang.login(this.loginInfo)
    .then((resultFromApi)=>{
      //clear the form
      this.loginInfo={
        username : '',
        password: ''
      };

      //clear the error message
      this.loginErrorMessage = '';

      //redirec to /rides
      this.routerThang.navigate(['/rides']);
    })
    .catch((err)=> {

      const parsedError = err.json();
      this.loginErrorMessage= parsedError.message = 'something went wrong'
    });
}
}
