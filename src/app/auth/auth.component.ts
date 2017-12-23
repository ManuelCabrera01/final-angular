import { Component, OnInit } from '@angular/core';
import {AuthService}  from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 isloggedOut:boolean = false;

 signupInfo = {
   username:'',
   password: ''

 };

 errorMessage : string;

 loginInfo = {
   unsermane: '',
   password: ''

 };
 loginErrorMessage :string;

  constructor(
    private Authorization: AuthService,
    private router:Router
  ) { }

  ngOnInit(){
  this.Authorization.checklogin()
  //if succes, wwe are logged in .
  .then((resultFromApi) => {
    this.router.navigate(['/rides']);
  })

  //Even if you  don't do anything on error, catch to cavoid a console error.
  .catch((err) => {
    this.isloggedOut = true;
  });

  }

  signThemUp(){
    this.Authorization.signup(this.signupInfo)
    .then((resultFromApi)=> {
      //clear form
      this.signupInfo= {
        username:'',
        password:''
      };

      //clear error message
      this.errorMessage = '';

      //redirect to /rides
      this.router.navigate(['/rides']);

    })
    .catch((err)=>{
      const parsedError = err.json();
      this.errorMessage= parsedError.message+ '🤪';
    })
  }//close signThemUp

  logThemIn(){
    this.Authorization.login(this.loginInfo)
    .then((resultFromApi)=>{
      //clear the form
      this.loginInfo={
        unsermane: '',
        password: ''
      };

      //clear the error message
      this.loginErrorMessage = '';

      //redirec to /rides
      this.router.navigate(['/rides']);
    })
    .catch((err)=> {
      const parsedError = err.json();
      this.loginErrorMessage= parsedError.message = '🤪'
    });
}
}
