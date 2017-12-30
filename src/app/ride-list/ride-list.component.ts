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


isShowingForm: boolean = false;


rideInfo = {
    rideName: undefined,
    rideDistance: undefined,
    ridePosition:"",
    rideDate:"",
    rideCategory:"",
    rideParticipant:"",
    rideMap:"",
    comment: ""
  };

  saveError: string;

  myCoolUploader = new FileUploader({
    url: environment.apiBase + '/api/rides',
    itemAlias: 'ridePicture'
  });

baseUrl = environment.apiBase;

  constructor(
    private rideThang: RideService,
    private authThang: AuthService,
    private routerThang:Router
    ) { }

    ngOnInit() {
     // this.getThemRides();
     this.authThang.checklogin()
       .then((userFromApi) => {
           this.currentUser = userFromApi;
          //  console.log(currentUser)
           this.getThemRides();
       })
       .catch(() => {
           this.routerThang.navigate(['/rides']);
       });
   } // close ngOnInit()

      logMeOutPls() {
    this.authThang.logout()
      .then(() => {
          this.routerThang.navigate(['/']);
      })
      .catch(() => {
          this.logoutError = 'your cant logout';
      });
  } // close logMeOutPls()
  getThemRides() {
    this.rideThang.allRides()
      .subscribe(
        (allTheRides) => {
            this.rideArray = allTheRides;
        },
        () => {
            this.rideListError = 'Sorry everybody. No camels today. 😱';
        }
      );
  } // close getThemRides()

  showRideForm() {
    this.isShowingForm = true;
  } // close showCamelForm()

  saveNewRide() {
      // if no picture, regular AJAX upload
      if (this.myCoolUploader.getNotUploadedItems().length === 0) {
        this.saveRideNoPicture();
      }

      // else, upload pictures with uploader
      else {
        this.saveRideWithPicture();
      }
    } // close saveNewCamel()
    private saveRideNoPicture() {
      this.rideThang.newRide(this.rideInfo)
        .subscribe(
          (newRideFromApi) => {
              this.rideArray.push(newRideFromApi);
              this.isShowingForm = false;
              this.rideInfo = {
                rideName: undefined,
                rideDistance: undefined,
                ridePosition:"",
                rideDate:"",
                rideCategory:"",
                rideParticipant:"",
                rideMap:"",
                comment: ""
              };
              this.saveError = "";
          },
          (err) => {
              this.saveError = 'Dont be a dumb 🐫';
          }
        );
    } // close saveCamelNoPicture

    private saveRideWithPicture() {
      this.myCoolUploader.onBuildItemForm = (item, form) => {
          form.append('rideNamee', this.rideInfo.rideName);
          form.append('rideDistance', this.rideInfo.rideDistance);
          form.append('ridePosition', this.rideInfo.ridePosition);
          form.append('rideDate', this.rideInfo.rideDate);
          form.append('rideCategory', this.rideInfo.rideCategory);
          form.append('ridePosition', this.rideInfo.ridePosition);
          form.append('rideParticipant', this.rideInfo.rideParticipant);
          form.append('rideMap', this.rideInfo.rideMap);
      };

      this.myCoolUploader.onSuccessItem = (item, response) => {
          console.log(item);
          const newRideFromApi = JSON.parse(response);
          this.rideArray.push(newRideFromApi);
          this.isShowingForm = false;
          this.rideInfo = {
            rideName: undefined,
            rideDistance: undefined,
            ridePosition:"",
            rideDate:"",
            rideCategory:"",
            rideParticipant:"",
            rideMap:"",
            comment: ""
          };
          this.saveError = "";
      };

      this.myCoolUploader.onErrorItem = (item, response) => {
          console.log(item, response);
          this.saveError = 'Dont be a dumb 🐫';
      };

      // this is the function that initiates the AJAX request
      this.myCoolUploader.uploadAll();
    } // close saveRideWithPicture

}
