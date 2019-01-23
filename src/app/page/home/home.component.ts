import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home/home.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  private imgInfos;

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.service.getImg()
      .subscribe((imgInfos) => {
        
        this.imgInfos = imgInfos
      });
  }

}
