import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { appConfig} from "../app.config";
import { Comment} from "../models/comment";

import { Observable} from "rxjs/Observable";
import {Review} from "../models/review";


@Injectable()
export class CommentService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) { }

  create(comment: Comment){
    console.log(comment);
    return this.http.post( appConfig.apiUrl + '/api/comment', comment)
  }

  deleteComment(id: string){
    return this.http.delete(`${appConfig.apiUrl}/api/comment`+ id );
  }

//  return this.http.delete(`${appConfig.apiUrl}/api/announcements`+ id );


  getAllCommentsOnPost(id: string)  : Observable<Array<Comment>>{
    try{
      return this.http.get(`${appConfig.apiUrl}/api/comment`+ id).map(res => res as Array<Comment> || []);
    } catch (error){
      console.log(error.msg);
    }
  }
}
