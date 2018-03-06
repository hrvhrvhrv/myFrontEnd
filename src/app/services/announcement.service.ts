import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { appConfig} from "../app.config";
import { Announcement} from "../models/announcement";
import { Observable} from "rxjs/Observable";
import {Review} from "../models/review";


@Injectable()
export class AnnouncementService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {

  }

  create(announcement: Announcement){
    console.log(announcement)
    return this.http.post(appConfig.apiUrl + '/api/announcements', announcement)
  }


  getAllAnnouncements() : Observable<Array<Announcement>>{
    try{
      return this.http.get(`${appConfig.apiUrl}/api/announcements`).map(res => res as Array<Announcement> || []);
    } catch (error) {
      console.log(error.msg)
    }
  }

  getAnnouncementByID(id: string){
    try{
      return this.http.get(`${appConfig.apiUrl}/api/announcements`+ id).map(res => res as Announcement);
    } catch (error){
      console.log(error.msg);
    }
  }

  deleteAnnouncement(id: string){
    return this.http.delete(`${appConfig.apiUrl}/api/announcements`+ id );
  }


  editAnnouncement(announcement: Announcement){
    return this.http.put(`${appConfig.apiUrl}/api/film`+ announcement._id, announcement)
  }

}
