import { Component, OnInit, Input } from '@angular/core';
import { Media } from 'src/app/model/media/media';

@Component({
  selector: 'app-issue-content',
  templateUrl: './issue-content.component.html',
  styleUrls: ['./issue-content.component.less']
})
export class IssueContentComponent implements OnInit {

  // 发布的图片
  @Input()
  issueSource: Media[];
  // 发布图片的数量
  sourceCount: number;
  // 发布图片数量与3的余数
  residue: number = 0;
  
  constructor() { }

  ngOnInit() {
    // console.log(this.issueSource);
    this.sourceCount = this.issueSource.length;
    // if (this.sourceCount <= 9) {
      this.residue = this.sourceCount % 3;
    // }
  }

}
