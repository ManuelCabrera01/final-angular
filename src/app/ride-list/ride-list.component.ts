import { Component, OnInit } from '@angular/core';
import {RideService} from '../service/ride.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import {AuthService}from '../service/auth.service'
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css'],
  //  providers: [RideService]
})
export class RideListComponent implements OnInit {

currentUser: any = {};

logoutError: string;

rideArray: any[] = [];
rideListError: string;

//keep and eye on this for now
isShowingForm: boolean = false;



rideInfo = {
    rideName: "",
    rideDistance: "",
    ridePosition:"",
    rideDate:"",
    rideCategory:"",
    rideParticipant:"",
    rideMap:"",
    comment: ""
  };
  saveError: string;

//   uploaderFiles = new FileUploader({
//     url: environment.apiBase + '/api/rides'
// //  itemAlias: 'camelPicture'
//   });
baseUrl = environment.apiBase;

  constructor(
    private rideService: RideService,
    private authService:AuthService,
    private router:Router
    ) { }

    ngOnInit() {
        this.authService.checklogin()
          .then((userFromApi) => {
              this.currentUser = userFromApi;
              this.getTheRides();
          })
          .catch(() => {
              this.router.navigate(['/']);
          });
      } // close ngOnInit()
      logMeOutPls() {
    this.authService.logout()
      .then(() => {
          this.router.navigate(['/']);
      })
      .catch(() => {
          this.logoutError = 'your cant logout';
      });
  } // close logMeOutPls()
  getTheRides() {
    this.rideService.getList()
      .subscribe(
        (allTheCamels) => {
            this.rideArray = allTheCamels;
        },
        () => {
            this.rideListError = 'Sorry everybody. No camels today. 😱';
        }
      );
  } // close getThemCamels()
  showRideForm() {
    this.isShowingForm = true;
  } // close showCamelForm()




}
