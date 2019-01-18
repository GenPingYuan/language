import { Injectable } from '@angular/core';
import { Hero } from './hero'
@Injectable({
  providedIn: 'root'
})
export class HerosService {
  private heros:Hero[] = [
    new Hero(1,'h1'),
    new Hero(2,'h2'),
    new Hero(3,'h3'),
    new Hero(4,'h4'),
    new Hero(5,'h5'),
    new Hero(6,'h6'),
  ]
  constructor() { }

  getHeros():Hero[] {
    return this.heros
  }

  getHeroById(id: number): Hero[] {
    return this.heros.filter((hero: Hero) => hero.id === id)
  }

}
