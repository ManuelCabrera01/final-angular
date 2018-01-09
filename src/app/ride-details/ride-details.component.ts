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



         paramsId = undefined;
         ride: any;

         commentInfo={
           commentContent:""
         };

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

    showRideForm() {
      this.isShowingForm = true;
    } // close showCamelForm()

   editRide(){
     this.rideThang.edit(this.rideInfo)
     .subscribe(() => {
       this.routerThang.navigate(['']);
     });


   }
    getRideDetails(id) {
      this.rideThang.get(id)
      .subscribe((ride) =>{
        console.log('Response from the api = ', ride.theComment.1.content);
        this.ride = ride;
      });
    }


    deleteRide() {
      if (window.confirm('Are you sure?')) {
        this.rideThang.remove(this.ride._id)
        .subscribe(() => {
        this.routerThang.navigate(['rides']);
        });
      }
    }
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
