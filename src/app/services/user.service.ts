import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { appConfig} from "../app.config";
import { User} from "../models/user";

import { Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
  headers: HttpHeaders;
  constructor(private http : HttpClient) { }

  getAllUsers() : Observable<Array<User>>{
    try{
      return this.http.get(`${appConfig.apiUrl}/api/user`).map(res => res as Array<User> || []);
    } catch (error){
      console.log(error.msg);
    }
  }

  getUserByID(id: string){
    try{
      return this.http.get(`${appConfig.apiUrl}/api/user`+ id).map(res => res as User);
    } catch (error){
      console.log(error.msg);
    }
  }

  editUser(user: User){
    try {
      return this.http.put(`${appConfig.apiUrl}/api/user` + user._id, user)
    } catch (error){
      console.log(error.msg);
    }
  }

  deleteUser(id: string){
    try {
    return this.http.delete(`${appConfig.apiUrl}/api/user`+ id );
    } catch (error){
      console.log(error.msg);
    }
  }

}
