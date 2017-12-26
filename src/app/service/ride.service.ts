import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';



@Injectable()
export class RideService {

    constructor(private TheHttp: Http)
    {}

    newRide(componentInfo) {
      return this.TheHttp
        .post(
          `${environment.apiBase}/api/ride`,

          // Form body information to send to the back end (req.body)
          componentInfo,

          // Send the cookies across domains
          // { withCredentials: true }
        )

        // Parse the JSON
        .map(res => res.json());
  } // close newCamel()

  editRide(componentInfo) {
    return this.TheHttp
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


  getList() {
    return this.TheHttp
      .get(
        `${environment.apiBase}/api/rides`,

        // Send the cookies across domains
        // { withCredentials: true }
      )

      // Parse the JSON
      .map(res => res.json());
} // close allCamels()

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
