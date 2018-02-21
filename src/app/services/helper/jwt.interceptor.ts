import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = JSON.parse(localStorage.getItem('token'));
    console.log("Current User Token");
   //console.log(currentUser.token);
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser.token}`
        }
      });
    }
    console.log(request.headers.get('Authorization'));
    console.log(request.headers);
    return next.handle(request);
  }
}

export const JwtInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true,
};
