import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Life } from 'src/app/model/lifeRecord/life';
import { from, Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ShelifeService {
  
  private lifes: Observable<Life []>;
  constructor(private http: HttpClient) { }

  getShelife():Observable<Life[]> {
    if(this.lifes) return this.lifes;
    const datas = "assets/json/shelife.json";
    this.lifes = this.http.get<Life[]>(datas);
    return this.lifes;
  }
}
