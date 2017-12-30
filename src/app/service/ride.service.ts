import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';



@Injectable()
export class RideService {

    constructor(
      private httpThang: Http)
    {}
    newRide(componentInfo) {
       return this.httpThang
         .post(
           `${environment.apiBase}/api/rides`,

           // Form body information to send to the back end (req.body)
           componentInfo,

           // Send the cookies across domains
          //  { withCredentials: true }
         )

         // Parse the JSON
         .map(res => res.json());
   } // close newRide()

  editRide(componentInfo) {
    return this.httpThang
      .post(
        `${environment.apiBase}/api/ride`,

        // Form body information to send to the back end (req.body)
        componentInfo,

        // Send the cookies across domains
        // { withCredentials: true }
      )

      // Parse the JSON
      .map(res => res.json());
} // close editCamel()


allRides() {
    return this.httpThang
      .get(
        `${environment.apiBase}/api/recipes`,
        // Send the cookies across domains
        // { withCredentials: true }
      )
      // Parse the JSON
      .map(res => res.json());
} // close allRecipes()

get(id){
  return this.httpThang
  .get(
    `${environment.apiBase}/api/rides/${id}`,
    // {withCredentials: true }
  )
  //parse the json
  .map(res => res.json());
}//close specific ride

}

    //  edit(ride) {
    //      return this.http.put(`${this.BASE_URL}/api/rides/${ride.id}`, ride)
    //        .map((res) => res.json());
    //    }
     //
    //    remove(id) {
    //      return this.http.delete(`${this.BASE_URL}/api/rides/${id}`)
    //        .map((res) => res.json());
    //    }
    //  }
