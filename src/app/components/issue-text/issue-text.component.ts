import { Component, OnInit, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-issue-text',
  templateUrl: './issue-text.component.html',
  styleUrls: ['./issue-text.component.less']
})
export class IssueTextComponent implements OnInit {

  @Input()
  text;
  
  constructor() { }

  ngOnInit() {
  }

}
