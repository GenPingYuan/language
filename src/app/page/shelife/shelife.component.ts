import { Component, OnInit } from '@angular/core';
import { ShelifeService } from 'src/app/service/shelife/shelife.service'
import { Life } from 'src/app/model/lifeRecord/life';
@Component({
  selector: 'app-shelife',
  templateUrl: './shelife.component.html',
  styleUrls: ['./shelife.component.less']
})
export class ShelifeComponent implements OnInit {

  lifeRecords: Life[];

  constructor(private service: ShelifeService) { }

  ngOnInit() {
    this.service.getShelife()
      .subscribe((lifeRecords: Life[]) => this.lifeRecords = lifeRecords)
  }



}
