import { Component, OnInit, Input } from '@angular/core';
import { ShelifeService } from 'src/app/service/shelife/shelife.service'
import { Life } from 'src/app/model/lifeRecord/life';

@Component({
  selector: 'app-life-record',
  templateUrl: './life-record.component.html',
  styleUrls: ['./life-record.component.less']
})
/**
 * 生活记录，类似动态消息
 */
export class LifeRecordComponent implements OnInit {

  @Input()
  lifeRecord: Life;

  constructor(private service: ShelifeService) { }

  ngOnInit() {
    // console.warn(this.lifeRecord)
  }

}
