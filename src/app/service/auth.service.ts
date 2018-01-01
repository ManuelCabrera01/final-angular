
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()
export class AuthService {


      constructor( private httpThang: Http) {}

// an argument for each "req.body" in the API route
      signup(componentInfo) {
            return this.httpThang
            .post(
              `${environment.apiBase}/api/signup`,
// Form body information to send to the back end (req.body)
              {
                signupUsername:componentInfo.username,
                signupPassword:componentInfo.password
              },
            )
  // Convert from observable to promise
              .toPromise()
// Parse the JSON
              .then(res => res.json());
    }; // close signup()
      login(componentInfo) {
          return this.httpThang
            .post(
            `${environment.apiBase}/api/login`,

            // Form body information to send to the back end (req.body)
              {
                username: componentInfo.username,
            password: componentInfo.password
              },

            // Send the cookies across domains
            // { withCredentials: true }
            )

          // Convert from observable to promise
            .toPromise()

          // Parse the JSON
            .then(res => res.json());
          } // close login()


          logout() {
            return this.httpThang.post(
              `${environment.apiBase}/api/logout`,

            // Nothing to send to the back end (req.body)
              {},

            // Send the cookies across domains
            // { withCredentials: true }
            )

          // Convert from observable to promise
            .toPromise()

          // Parse the JSON
            .then(res => res.json());
          } // close logout()


          checklogin() {
          return this.httpThang
            .get(
              `${environment.apiBase}/api/checklogin`

              // Send the cookies across domains
              // { withCredentials: true }
            )

            // Convert from observable to promise
            .toPromise()

            // Parse the JSON
            .then(res => res.json());
      } // close checklogin()


        }
