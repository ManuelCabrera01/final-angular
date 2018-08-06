import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";
import { environment } from "../../environments/environment";

@Injectable()
export class RideService {
  constructor(private httpThang: Http) {}

  newRide(componentInfo) {
    return (
      this.httpThang
        .post(
          `${environment.apiBase}/api/rides`,

          // Form body information to send to the back end (req.body)
          componentInfo,

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Parse the JSON
        .map(res => res.json())
    );
  } // close newRide()

  newComment(id, componentInfo) {
    return (
      this.httpThang
        .post(
          `${environment.apiBase}/api/rides/${id}/comment`,

          // Form body information to send to the back end (req.body)
          componentInfo,

          // Send the cookies across domains
          { withCredentials: true }
        )

        // Parse the JSON
        .map(res => res.json())
    );
  } // close newRide()

  allRides() {
    return (
      this.httpThang
        .get(
          `${environment.apiBase}/api/rides`,
          // Send the cookies across domains
          { withCredentials: true }
        )
        // Parse the JSON
        .map(res => res.json())
    );
  } // close allRecipes()

  get(id) {
    return (
      this.httpThang
        .get(`${environment.apiBase}/api/rides/${id}`, {
          withCredentials: true
        })
        //parse the json
        .map(res => res.json())
    );
  } //close specific ride

  edit(id, componentInfo) {
    return (
      this.httpThang
        .put(
          `${environment.apiBase}/api/rides/${id}/edit`,
          {
            updateName: componentInfo.updateName,
            updateDistanc: componentInfo.updateDistanc,
            rideUsername: componentInfo.clientUsername,
            updateCategory: componentInfo.updateCategory,
            updateDate: componentInfo.updateDate
          },

          { withCredentials: true }
        )
        //parse the json
        .map(res => res.json())
    );
  } //edit specific ride

  remove(id) {
    return (
      this.httpThang
        .delete(`${environment.apiBase}/api/rides/${id}`, {
          withCredentials: true
        })
        //parse the json
        .map(res => res.json())
    );
  } //delete specific ride
  // get(id){
}
