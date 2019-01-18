import { Component, OnInit } from '@angular/core';
import { EngineService } from '../engine.service'
import { Engine } from '../engine'
@Component({
  selector: 'app-engine-list',
  templateUrl: './engine-list.component.html',
  styleUrls: ['./engine-list.component.less']
})
export class EngineListComponent implements OnInit {

  engines: Engine[];
  constructor(private service: EngineService) { }

  ngOnInit() {
    this.engines = this.service.getEngine();
  }

}
