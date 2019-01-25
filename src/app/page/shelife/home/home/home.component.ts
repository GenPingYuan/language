import { Component, OnInit } from '@angular/core';
import { ShelifeService } from 'src/app/service/shelife/shelife.service';
import { Life } from 'src/app/model/lifeRecord/life';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  lifeRecords: Life[];

  constructor(private service: ShelifeService) { }

  ngOnInit() {
    this.service.getShelife()
      .subscribe((lifeRecords: Life[]) => this.lifeRecords = lifeRecords)
  }

}
