import { Injectable } from '@angular/core';
import { Engine } from './engine';
import { EngineType } from './engine-type.enum';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  private engineList: Engine[] = [
    new Engine(1,"火娃",EngineType.fire),
    new Engine(2,"水娃",EngineType.water),
    new Engine(3,"土娃",EngineType.earth),
    new Engine(4,"金娃",EngineType.gold),
    new Engine(5,"木娃",EngineType.wood),
  ]
  constructor() { }

  getEngine(): Engine[] {
    return this.engineList;
  }

  getEngineById(id): Engine[]{
    return this.engineList.filter((engine: Engine)=> engine.id === id);
  }

  updateEngine(engine: Engine){
    console.log(engine);
    this.engineList.map((preEngine: Engine)=>{
      console.warn(preEngine.id === engine.id);
      if(preEngine.id === engine.id) {
        preEngine = engine;
        return false;
      }
    })
  }
}
