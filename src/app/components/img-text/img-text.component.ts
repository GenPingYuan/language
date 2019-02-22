import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-img-text',
  templateUrl: './img-text.component.html',
  styleUrls: ['./img-text.component.less']
})
export class ImgTextComponent implements OnInit {
  

  @Input() imgInfo; 

  styles;
  constructor() { }

  ngOnInit() {
    // console.warn(this.imgInfo)
    this.styles = {
      "background": "url(" + this.imgInfo["url"] + ")",
      "height": "900px"
    }
  }

}
