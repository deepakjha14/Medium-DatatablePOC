import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BringUserService {
  userData: any;
  userDataSubject: Subject<any>;

  constructor(private http: HttpClient) {
    this.userDataSubject = new Subject<any>();
    this.http.get('http://localhost:3000/userData').toPromise().then((res) => {
      //console.log(res);
      this.userDataSubject.next(res);
    });
  }

  getUserData() {
    return this.userDataSubject;
  }
}
