import { Component, OnInit }      from '@angular/core';
import { RideService }            from '../service/ride.service'
import { environment }            from '../../environments/environment';
import { FileUploader }           from 'ng2-file-upload';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService }            from '../service/auth.service'


@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css'],
  providers : [RideService]
})
export class RideDetailsComponent implements OnInit {
  pointRide(event){
  this.lat= event.coords.lat,
  this.lng = event.coords.lng
  }
// map setings
  // title: string = 'My first AGM project';
   lat: number = 51.678418;
   lng: number = 7.809007;

// end of maps settings

         ride:any;
         paramsId = undefined;
         theRide: any;
         rideParticipant: {name:string}

         commentInfo={
             commentContent:''
           };

        rideInfo = {
          rideName: '',
          rideDistance: '',
          ridePosition:"",
          rideDate:"",
          rideCategory:"",
          rideParticipant:"",
          rideMap:"",
          comment: ""
        };

      user:any;
      currentUser: any = {};
      commentArray:any[] =[];
      logoutError: string;
      rideListError: string;
      isShowingForm: boolean = false;
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
       private route : ActivatedRoute
       ) { }

    ngOnInit() {
      this.authThang.checklogin()
      // console.log("MY RIDE = ", this.theRide.ride.user);
        .then((userFromApi) => {
            this.currentUser = userFromApi;
            this.route.params.subscribe(params => {
              this.getRideDetails(params['id']);
            })
            })
        .catch(() => {
            this.routerThang.navigate(['/login']);
        });

    }
    showCommentForm() {
      this.isShowingForm = true;
    }

    showRideForm() {
      this.isShowingForm = true;
    } // close showCamelForm()

   editRide(id){
     console.log("MY RIDE = ", this.ride.theRide);
     this.rideThang.edit(this.ride.theRide._id, this.rideInfo) .toPromise()
     .then((rideFromApi)=>{
       this.ride = {
    updateName: '',
    updateDistance:'',
    updateCategory:'',
    updateDate:''


  };
  this.ride = this.rideInfo;
      // clear error message
      this.saveError = "";
})
.catch((err) => {
      const parsedError = err.json();
      this.saveError = parsedError.message + '';
    });
   }

 //   joinRide(myRider) {
 // const existingRider =
 // this.rideParticipant.find(rider=>rider.name === myRider.name);
 // this.rideParticipant.push(myRider);
 // }
    getRideDetails(id) {
      this.rideThang.get(id)
      .subscribe((ride) =>{
        // console.log('Response from the api = ', ride.theComment);
        this.ride = ride;
      });
    }
    saveNewComment(id) {
      console.log("MY comment = ", this.ride.theRide.user);
        this.rideThang.newComment(this.ride.theRide._id, this.commentInfo)
          .subscribe(
            (newCommentFromApi) => {
                this.ride.theComment.push(newCommentFromApi);
                this.isShowingForm = false;
                this.commentInfo = {
                  commentContent: ""
                };
                this.saveError = "";
            },
            (err) => {
                this.saveError = 'you can\'t create a ride';
            }
          );
      } // close saveCamelNoPicture


      // saveNewReview(id) {
      //   this.recipeThang.newReview(this.reviewInfo, id)
      //     .subscribe(
      //       (newReviewFromApi) => {
      //         this.recipe.review.push(newReviewFromApi);
      //         this.isShowingForm = false;
      //         this.reviewInfo = {
      //           reviewRating: undefined,
      //           reviewReview: ''
      //         };//close this.reviewInfo
      //         this.saveError = 'There was an error saving the review.';
      //       }//close newReviewFromApi
      //     );//close subscribe
      // }//close saveNewReview
      //
      // }

    deleteRide() {
      if (window.confirm('Are you sure?')) {
        this.rideThang.remove(this.ride._id)
        .subscribe(() => {
        this.routerThang.navigate(['rides']);
        });
      }
    }

    //  YOUR MAP LOGIC IN HERE ................>>>>>>>>>>>>>>>>>>>>>>

    //  END OF YOUR MAP LOGIC IN HERE ................>>>>>>>>>>>>>>>>>>>>>>
  }
  //   showReviewForm() {
  //     this.isShowingForm = true;
  //   }//close showRecipeForm();
  // getParamsId(){
  // this.route.params.subscribe(params => {
  //   this.saveNewComment(params['id']);
  // })
  // }

  //
  // saveNewComment(id) {
  //   this.rideThang.newComment(this.commentInfo, id)
  //     .subscribe(
  //       (newReviewFromApi) => {
  //         this.ride.comment.push(newCommentFromApi);
  //         this.isShowingForm = false;
  //         this.CommentInfo = {
  //           reviewRating: undefined,
  //           reviewReview: ''
  //         };//close this.reviewInfo
  //         this.saveError = 'There was an error saving the review.';
  //       }//close newReviewFromApi
  //     );//close subscribe
  // }//close saveNewReview
