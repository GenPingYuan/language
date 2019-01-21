import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Life } from 'src/app/model/lifeRecord/life';
// import { from } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ShelifeService {

  constructor(private http: HttpClient) { }

  getShelife() {
    const datas = "assets/json/shelife.json";
    return this.http.get<Life[]>(datas);
  }
}
