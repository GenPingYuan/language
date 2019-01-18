import { Component, OnInit } from '@angular/core';
import { HerosService } from '../heros.service'
import { Hero } from '../hero'
@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.less']
})
export class HerosListComponent implements OnInit {
  heros: Hero[];
  constructor(private service: HerosService) { }

  ngOnInit() {
    this.heros = this.service.getHeros()
  }

}
