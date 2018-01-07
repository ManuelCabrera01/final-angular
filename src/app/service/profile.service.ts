import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfileService {

  constructor(
    private httpThang: Http
  ) { }

  getProfile(id){
   return this.httpThang
   .get(
     `${environment.apiBase}/api/profile/${id}`,
     {withCredentials: true }
   )
   //parse the json
   .map(res => res.json());
 }//close specific recipe


 // editUser(id) {
 //      return this.httpThang
 //   .put(
 //     `${environment.apiBase}/api/profile/${id}`,
 //     {withCredentials: true }
 //   )
 //   //parse the json
 //   .map(res => res.json());
 // }//close edit user info
 //
 //
 //  removeUser(id) {
 //        return this.httpThang
 //     .delete(
 //       `${environment.apiBase}/api/profile/${id}`,
 //       {withCredentials: true }
 //     )
 //     //parse the json
 //     .map(res => res.json());
}
// }
//delete user form db
