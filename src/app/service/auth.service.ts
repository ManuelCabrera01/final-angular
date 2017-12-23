
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()
export class AuthService {


      constructor( private http: Http) {}
// an argument for each "req.body" in the API route
      signup(componentInfo) {
            return this.http.post(
              `${environment.apiBase}/api/signup`,
// Form body information to send to the back end (req.body)
              {


                signupUserName:componentInfo.usename,
                signupPassword:componentInfo.password
              },
            )
  // Convert from observable to promise
              .toPromise()
// Parse the JSON
              .then(res => res.json());
    }; // close signup()
      login(componentInfo) {
          return this.http
            .post(
            `${environment.apiBase}/api/login`,

            // Form body information to send to the back end (req.body)
              {
                UserName: componentInfo.username,
              Password: componentInfo.password
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
            return this.http.post(
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
          return this.http
            .get(
              `${environment.apiBase}/api/checklogin`,

            // Send the cookies across domains
            // { withCredentials: true }
            )

          // Convert from observable to promise
            .toPromise()

          // Parse the JSON
            .then(res => res.json());
          } // close checklogin()

        }
