import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { appConfig} from "../app.config";
import { Comment} from "../models/comment";

import { Observable} from "rxjs/Observable";


@Injectable()
export class CommentService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) { }

  create(comment: Comment){
    console.log(comment);
    return this.http.post( appConfig.apiUrl + '/api/comment', comment)
  }

  delete(id: string){
    return this.http.delete(`${appConfig.apiUrl}/api/comment`+ id );
  }

}
