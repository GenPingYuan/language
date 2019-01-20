import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getNavs(){
    const navJson = 'assets/json/nav.json';
    return this.http.get(navJson);
  }

  getImg(){
    const imgJson = "assets/json/homeImg.json";
    return this.http.get(imgJson);
  }
}
