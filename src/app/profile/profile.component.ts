import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute}            from '@angular/router';
import {environment }       from '../../environments/environment';
import {RideService}         from '../service/ride.service';
import {AuthService}         from '../service/auth.service';
import {ProfileService}      from '../service/profile.service';
import {FileUploader }       from 'ng2-file-upload';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService, ProfileService, ProfileService]

})
export class ProfileComponent implements OnInit {

    ride: any;
    currentUser: any = {};
    userRideArray: any[] = [];
    rideListError: string;
    baseUrl = environment.apiBase;

  constructor(
    private routerThang: Router,
    private route: ActivatedRoute,
    private authThang: AuthService,
    private rideThang: RideService,
    private profileThang: ProfileService
  ) { }


  ngOnInit() {
     this.authThang.checklogin()
       .then((userFromApi) => {
           this.currentUser = userFromApi;
           this.route.params.subscribe(params => {
             this.getProfile(params['id']);
           })      })
       .catch(() => {
           this.routerThang.navigate(['/login']);
       });
   }

   getProfile(id) {
   this.profileThang.getProfile(id)
   .subscribe(
     (usersRides) => { this.userRideArray = usersRides
      },
     () => {

       this.rideListError = 'could not retrieve all the recipes'
     }
   );
 }

 // editUserInfor(id) {
 edituser(id){
   console.log("MY RIDE = ", this.currentUser._id);
   this.profileThang.editUser(this.currentUser._id)
   .subscribe(() => {
     this.routerThang.navigate(['detaill']);
   });
 }

 //
 // deleteUser(id) {
 // if (window.confirm('Are you really really sure?')) {
 //   this.profileThang.removeUser(this.currentUser._id)
 //     .subscribe(() => {
 //       this.routerThang.navigate(['/login']);
 //     });
 // }

}
