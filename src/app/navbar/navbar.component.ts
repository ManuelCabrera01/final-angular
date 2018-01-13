// import { Component, OnInit } from '@angular/core';
import { Component, OnInit }      from '@angular/core';
import { RideService }            from '../service/ride.service'
import { environment }            from '../../environments/environment';
import { FileUploader }           from 'ng2-file-upload';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService }            from '../service/auth.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logoutError: string;
  
  isIn = false;   // store state
      toggleState() { // click handler
          let bool = this.isIn;
          this.isIn = bool === false ? true : false;


      }

  constructor(
    private rideThang: RideService,
    private authThang: AuthService,
    private routerThang:Router,
  )
    { }


  ngOnInit() {
  }
  logMeOutPls() {
this.authThang.logout()
  .then(() => {
      this.routerThang.navigate(['/']);
  })
  .catch(() => {
      this.logoutError = 'your cant logout';
  });
} // close logMeOutPls()
}
