import { Injectable } from '@angular/core';
import { LifeMenu } from 'src/app/model/menu/life-menu';
import { of, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LifeMenuService {
  private lifeMenu: LifeMenu;
  constructor(private http: HttpClient) { }

  getLifeMenu(): Observable<LifeMenu> {
    if (this.lifeMenu) return of(this.lifeMenu);
    const data = "assets/json/life-menu.json";
    return this.http.get<LifeMenu>(data);
  }
}
