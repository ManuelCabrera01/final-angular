
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class AuthService {
   BASE_URL: string = 'http://localhost:3000';
    constructor(private http: Http) {}

    handleError(e) {
        return Observable.throw(e.json().message);
      }
      signup(user) {
    return this.http.post(`/api/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`/api/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`/api/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  checklogin() {
    return this.http.get(`/api/checklogin`)
      .map(res => res.json())
      .catch(this.handleError);
  }
    }
