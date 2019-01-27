import { Component, OnInit, Input } from '@angular/core';
import { Media } from 'src/app/model/media/media';

@Component({
  selector: 'app-issue-content',
  templateUrl: './issue-content.component.html',
  styleUrls: ['./issue-content.component.less']
})
export class IssueContentComponent implements OnInit {

  @Input()
  issueSource: Media[]
  sourceCount: number;
  residue: number = 0;
  constructor() { }

  ngOnInit() {
    this.sourceCount = this.issueSource.length;
    if(this.sourceCount <= 9) {
      this.residue = this.sourceCount % 3;
    }
  }

}
