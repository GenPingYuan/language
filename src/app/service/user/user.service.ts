import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from 'src/app/model/user/user';
import { of, Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user: User;
  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    if (this.user) return of(this.user);
    const data = "assets/json/user.json"
    return this.http.get<User>(data)
  }
}
