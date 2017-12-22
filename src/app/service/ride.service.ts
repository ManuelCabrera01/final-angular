import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RideService {
  BASE_URL: string = 'http://localhost:3000';
    constructor(private http: Http) {}

      getList() {
    return this.http.get(`${this.BASE_URL}/api/rides`)
        .map((res) => res.json());
    }
      get(id) {
       return this.http.get(`${this.BASE_URL}/api/rides/${id}`)
         .map((res) => res.json());
     }

     edit(ride) {
         return this.http.put(`${this.BASE_URL}/api/rides/${ride.id}`, ride)
           .map((res) => res.json());
       }

       remove(id) {
         return this.http.delete(`${this.BASE_URL}/api/rides/${id}`)
           .map((res) => res.json());
       }
     }
