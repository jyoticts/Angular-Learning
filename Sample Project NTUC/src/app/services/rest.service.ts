

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, subscribeOn } from 'rxjs/operators';

import { HelperService } from './helper.service';
import { appApiResources, ENVIRONMENT } from '../utils/config/app.constants';
import * as $ from 'jquery';

import * as _ from 'lodash';

const httpOptions = {
  observe: 'response',
  headers: new HttpHeaders({
    'responseType':  'json'
  })
};
@Injectable()

export class RestService {
  user;
  constructor(private http: HttpClient, private helperService: HelperService){} 




  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  get(url, params) {

    return this.http.get(this.helperService.getUrl(url), params)
  }
  post(url, data, params) {

    return this.http.post(this.helperService.getUrl(url), data, params)
  }
  delete(url, params) {
    return this.http.delete(this.helperService.getUrl(url), params)
  }
  put(url, data, params) {

    return this.http.put(this.helperService.getUrl(url), data, params)
  }

  login (user): Observable<any> {
    this.user = user;
    // sessionStorage.setItem('authString', 'Basic ' + window.btoa(user.username + ':' + user.password));

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append(
      'Authorization', 'Basic ' + window.btoa(user.username + ':' + user.password)
    );
    // headers.append("Content-Type", "application/x-www-form-urlencoded");
    // headers = headers.append('X-Requested-With', 'XMLHttpRequest');
    headers = headers.append('Content-Type', 'application/json');
    // const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.post(_.extend(appApiResources['login']),{}, { headers: headers,observe: 'response' })
    .pipe(
    );
  }

  getDeceasedList (offset,sizeOfResult): Observable<any> {
    return this.get(_.extend(appApiResources['deceasedList'],{params: [offset,sizeOfResult] }), {})
    .pipe(
      tap( // Log the result or error
        data => console.log(data),
        error => console.log(error)
      )
    );
}
getDeceasedDetails (nricHash): Observable<any> {
  return this.get(_.extend(appApiResources['deceasedDetails'],{params: [nricHash] }), {})
  .pipe(
  );
}

}