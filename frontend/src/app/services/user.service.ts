import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// import User from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiurl="http://localhost:3000";
httpClient=inject(HttpClient)
  static apiurl: string;
  constructor() { }
  getUsers(){
   return this.httpClient.get(this.apiurl+'/users' );
  }
}
