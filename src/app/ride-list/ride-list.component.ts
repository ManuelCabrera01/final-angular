import { Component, OnInit } from '@angular/core';
import {RideService}         from '../service/ride.service';
import { Router }            from '@angular/router';
import { environment }       from '../../environments/environment';
import {AuthService}         from '../service/auth.service'
import { FileUploader }       from 'ng2-file-upload';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';


@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css'],
  //  providers: [RideService]
})
export class RideListComponent implements OnInit {

  pointRide(event){
  this.lat= event.coords.lat,
  this.lng = event.coords.lng
  }
// map setings
  // title: string = 'My first AGM project';
   lat: number = 51.678418;
   lng: number = 7.809007;

   items :Array <any> = []

  currentUser: any = {};
  logoutError: string;
  rideArray: any[] = [];
  rideListError: string;


  pattern: string;
  isShowingForm: boolean = false;


rideInfo = {
    rideName: undefined,
    rideDistance: undefined,
    // ridePosition:"",
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
    private routerThang:Router,

    ) {
    this.items= [
      {name:'/assets/images/blackandwhite.jpeg'},
      {name:'/assets/images/blackandwhite(1).jpeg'},
      {name:'/assets/images/blackandwhite(2).jpeg'},
      {name:'/assets/images/blackandwhite(3).jpeg'},
      {name:'/assets/images/blackandwhite(4).jpeg'},
      {name:'/assets/images/blackandwhite.jpeg'},
      {name:'/assets/images/blackandwhite(1).jpeg'},
      {name:'/assets/images/blackandwhite(2).jpeg'},
      {name:'/assets/images/blackandwhite(3).jpeg'},
      {name:'/assets/images/blackandwhite(4).jpeg'},
      {name:'/assets/images/images(1).jpeg'},
      {name:'/assets/images/images(2).jpeg'},
      {name:'/assets/images/images(3).jpeg'}
    ]
}
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

   addItem(item) {
       this.rideArray.push({name: item});
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
  getThemRides() {
    //  console.log(userFromApi)
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
                // ridePosition:"",
                rideDate:"",
                rideCategory:"",
                rideParticipant:"",
                rideMap:"",
                comment: ""
              };
              this.saveError = "";
          },
          (err) => {
              this.saveError = 'you cant create a ride';
          }
        );
    } // close saveCamelNoPicture

    private saveRideWithPicture() {
      this.myCoolUploader.onBuildItemForm = (item, form) => {
          form.append('rideNamee',        this.rideInfo.rideName);
          form.append('rideDistance',     this.rideInfo.rideDistance);
          // form.append('ridePosition',     this.rideInfo.ridePosition);
          form.append('rideDate',         this.rideInfo.rideDate);
          form.append('rideCategory',     this.rideInfo.rideCategory);
          // form.append('ridePosition',     this.rideInfo.ridePosition);
          form.append('rideParticipant',  this.rideInfo.rideParticipant);
          form.append('rideMap',          this.rideInfo.rideMap);
      };

      this.myCoolUploader.onSuccessItem = (item, response) => {
          console.log(item);
          const newRideFromApi = JSON.parse(response);
          this.rideArray.push(newRideFromApi);
          this.isShowingForm = false;
          this.rideInfo = {
            rideName: undefined,
            rideDistance: undefined,
            // ridePosition:"",
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
