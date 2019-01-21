import { Component, OnInit, Input } from '@angular/core';
import { Avatar } from 'src/app/model/user/avatar';

@Component({
  selector: 'app-avater',
  templateUrl: './avater.component.html',
  styleUrls: ['./avater.component.less']
})
export class AvaterComponent implements OnInit {

  @Input()
  avater: Avatar;

  constructor() { }

  ngOnInit() {
    console.warn(this.avater)
  }

}
